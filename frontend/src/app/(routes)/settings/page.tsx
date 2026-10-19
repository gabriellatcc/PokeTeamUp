"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { useAuth } from "@/hooks/useAuth";

import { DEFAULT_POKEBALL } from "@/lib/pokeballs";
import { cn } from "../../../lib/utils";

import { Pokeball, PokeballPicker } from "../../../components/settings/pokeball-picker";

type Toast = { id: number; type: "success" | "info" | "error"; message: string };

const TOAST_BORDER = {
  success: "border-l-green-500",
  info: "border-l-blue-500",
  error: "border-l-red-500",
} as const;

export default function SettingsPage() {
  const { user, isLoading, updateUser } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pokeball, setPokeball] = useState(DEFAULT_POKEBALL);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    if (!isLoading && !user) router.replace("/signin");
  }, [isLoading, user, router]);

  useEffect(() => {
    if (!user) return;
    setName(user.name);
    setEmail(user.email);
    setPokeball(user.avatar ?? DEFAULT_POKEBALL);
  }, [user]);

  const pushToast = (type: Toast["type"], message: string) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, type, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  };

  const handleCancel = () => {
    if (!user) return;
    setName(user.name);
    setEmail(user.email);
    setPokeball(user.avatar ?? DEFAULT_POKEBALL);
    setPassword("");
    setPickerOpen(false);
  };

  const handleSave = () => {
    if (!user) return;
    const trimmedName = name.trim();

    if (!trimmedName || !/^\S+@\S+\.\S+$/.test(email)) {
      pushToast("error", "Houve um erro na alteração de dados");
      return;
    }

    const changed =
      trimmedName !== user.name ||
      email !== user.email ||
      pokeball !== (user.avatar ?? DEFAULT_POKEBALL) ||
      password.length > 0;

    if (!changed) {
      pushToast("info", "Nenhuma alteração detectada. O perfil permanece o mesmo.");
      return;
    }

    updateUser({ name: trimmedName, email, avatar: pokeball });
    setPassword("");
    setPickerOpen(false);
    pushToast("success", "Perfil atualizado com sucesso!");
  };

  if (isLoading || !user) return null;

  const inputClass =
    "w-full rounded-lg border border-foreground/30 bg-transparent px-3 py-2 text-foreground outline-none focus:border-accent";

  return (
    <div className="relative flex flex-1 items-center justify-center px-4 py-10">
      {/* toasts */}
      <div className="fixed right-4 top-28 z-50 flex w-72 flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "rounded-md border-l-4 bg-background px-3 py-2 text-sm text-foreground shadow-lg animate-in fade-in",
              TOAST_BORDER[t.type]
            )}
          >
            {t.message}
          </div>
        ))}
      </div>

      <section className="w-full max-w-3xl rounded-3xl bg-card/95 p-8 shadow-xl backdrop-blur-sm">
        <h1 className="mb-8 text-3xl font-extrabold text-foreground">Edit profile</h1>

        <div className="grid gap-8 md:grid-cols-[170px_1fr]">
          {/* avatar = pokébola escolhida */}
          <div className="relative flex justify-center md:justify-start">
            <button
              type="button"
              onClick={() => setPickerOpen((o) => !o)}
              className="relative h-36 w-36 rounded-full"
              aria-label="Escolher pokébola"
            >
              <Pokeball id={pokeball} size={144} className="h-36 w-36" />
              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm text-accent-foreground shadow">
                <i className="fa-solid fa-pen-to-square" />
              </span>
            </button>

            {pickerOpen && (
              <div className="absolute left-0 top-40 z-20">
                <PokeballPicker
                  value={pokeball}
                  onChange={(id) => {
                    setPokeball(id);
                    setPickerOpen(false);
                  }}
                />
              </div>
            )}
          </div>

          {/* campos */}
          <div className="space-y-5">
            <label className="block text-sm text-foreground/80">
              Name
              <input
                className={inputClass}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <h2 className="pt-2 text-xl font-bold text-foreground">Contact information</h2>

            <label className="block text-sm text-foreground/80">
              Email
              <input
                type="email"
                className={inputClass}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="block text-sm text-foreground/80">
              Password
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={cn(inputClass, "pr-10")}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/70"
                  aria-label="Mostrar senha"
                >
                  <i className={cn("fa-solid", showPassword ? "fa-eye-slash" : "fa-eye")} />
                </button>
              </div>
            </label>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-end gap-6">
          <Button variant="ghost" onClick={handleCancel} className="font-bold text-accent">
            Cancel
          </Button>
          <Button onClick={handleSave} className="rounded-xl px-10 font-bold">
            Save
          </Button>
        </div>
      </section>
    </div>
  );
}