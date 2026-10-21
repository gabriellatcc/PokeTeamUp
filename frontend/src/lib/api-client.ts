import axios, { type AxiosRequestConfig } from "axios";

/** Same logical key in both storages; only one is populated at a time. */
export const AUTH_TOKEN_STORAGE_KEY = "metricnotes_access_token";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api-placeholder.com",
});

export function getAuthAccessToken(): string | null {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    sessionStorage.getItem(AUTH_TOKEN_STORAGE_KEY) ?? localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)
  );
}

axiosInstance.interceptors.request.use((config) => {
  const token = getAuthAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

function notifyAuthStorageChanged() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("metricnotes-auth"));
  }
}

export function setAuthAccessToken(token: string | null, rememberMe = true) {
  if (typeof window === "undefined") return;

  sessionStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);

  if (!token) {
    notifyAuthStorageChanged();
    return;
  }

  if (rememberMe) {
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
  } else {
    sessionStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
  }

  notifyAuthStorageChanged();
}

export class ApiEmptyResponseError extends Error {
  constructor(message = "O servidor não retornou dados.") {
    super(message);
    this.name = "ApiEmptyResponseError";
  }
}

export const apiClient = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response = await axiosInstance({
      ...config,
      ...options,
      headers: {
        ...(config.headers ?? {}),
        ...(options?.headers ?? {}),
      },
    });

    const { data, status } = response;

    if (status === 204 || status === 205) {
      return data as T;
    }

    if (data === undefined || data === null) {
      throw new ApiEmptyResponseError();
    }

    return data as T;
  } catch (error) {
    // Você pode retornar dados vazios mockados ou repassar o erro tratável.
    console.warn("The Backend is disabled right now.");
    throw error;
  }
};