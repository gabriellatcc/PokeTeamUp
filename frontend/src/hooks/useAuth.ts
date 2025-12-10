import { useMutation, useQuery,useQueryClient } from '@tanstack/react-query';
import api from '@/src/lib/axios';
import { useRouter } from 'next/navigation';

interface RegisterData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
interface LoginData {
    email: string;
    password: string;
}
export const useRegister = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
return useMutation({
        mutationFn: async (data: RegisterData): Promise<LoginResponse> => {
            await api.get('/sanctum/csrf-cookie');
            
            const response = await api.post('/register', data);
            return response.data as LoginResponse;
        },
        onSuccess: (data) => {
            if (data.token) {
                localStorage.setItem('authToken', data.token); 
                console.log('Sanctum Token salvo após o registro.');
            }

            queryClient.invalidateQueries({ queryKey: ['user'] }); 
            router.push('/'); 
        },
        onError: (error: any) => {
            console.error('Auth error:', error.response?.data);
        }
    });
};
interface LoginResponse {
    token: string;
    token_type: string;
    user?: any;
}

export const useLogin = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ email, password }: LoginData): Promise<LoginResponse> => {
            await api.get('/sanctum/csrf-cookie');
            
            const response = await api.post('/login', { email, password });
            return response.data as LoginResponse;
        },
        onSuccess: (data) => { 
            if (data.token) {
                localStorage.setItem('authToken', data.token); 
                console.log('Sanctum Token salvo com sucesso.');
            } else {
                console.error('Login bem-sucedido, mas token não encontrado na resposta.');
            }
            queryClient.invalidateQueries({ queryKey: ['user'] });
            router.push('/');
        },
        onError: (error: any) => {
            console.error('Login error:', error.response?.data);
        }
    });
};

// hook to get the logged in user
export const useUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await api.get('/api/user');
            return response.data;
        },
        retry: false,
        staleTime: 1000 * 60 * 5,
    });
};

// hook to logout
export const useLogout = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: async () => {
            await api.post('/logout');
            await api.post('/');
        },
        onSuccess: () => {
            window.location.href = '/signin'; 
        },
    });
};