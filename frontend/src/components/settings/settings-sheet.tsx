"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { Button as PixelButton } from "@/components/ui/pixelact-ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";

import { Pokeball, PokeballPicker } from "@/components/settings/pokeball-picker";
import { DEFAULT_POKEBALL } from "@/lib/pokeballs";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export function SettingsSheet() {
    const isClosingRef = useRef(false);
    const [open, setOpen] = useState(true);

    const [showPassword, setShowPassword] = useState(false);
    const [pickerOpen, setPickerOpen] = useState(false);
    const { user, isLoading, updateUser } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pokeball, setPokeball] = useState(DEFAULT_POKEBALL);
    const [password, setPassword] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
        router.replace("/signin");
        }
    }, [isLoading, user, router]);

    useEffect(() => {
        if (!user) return;
        setName(user.name);
        setEmail(user.email);
        setPokeball(user.avatar ?? DEFAULT_POKEBALL);
    }, [user]);

    const closeSheet = () => {
        isClosingRef.current = true;
        setOpen(false);
        setTimeout(() => {
            if (window.history.length > 2) {
                router.back();
            } else {
                router.push("/");
            }
        }, 200);
    };

    const handleOpenChange = (isOpen: boolean) => {
        if (!isOpen && !isClosingRef.current) {
            return;
        }
        if (!isOpen) {
            closeSheet();
        }
    };

    const handleCancel = () => {
        closeSheet();
    };

    const handleSave = () => {
        if (!user) return;
        const trimmedName = name.trim();

        if (!trimmedName || !/^\S+@\S+\.\S+$/.test(email)) {
        toast.error("There was an error updating your profile");
        return;
        }

        const changed =
            trimmedName !== user.name ||
            email !== user.email ||
            pokeball !== (user.avatar ?? DEFAULT_POKEBALL) ||
            password.length > 0;

        if (!changed) {
            closeSheet();
            toast.info("No changes detected. The profile remains the same.");
            return;
        }

        updateUser({ name: trimmedName, email, avatar: pokeball });
        setPassword("");
        setPickerOpen(false);
        toast.success("Updated profile successfully!");
        closeSheet();
    };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
        <SheetContent side="left" className="flex w-full flex-col gap-0 overflow-y-auto sm:max-w-md z-50">
            <SheetHeader>
                <SheetTitle className="text-3xl font-extrabold">Edit profile</SheetTitle>
                <SheetDescription>Update your profile information.</SheetDescription>
            </SheetHeader>

            <div className="flex-1 space-y-6 px-4 py-6">
                <div className="relative flex justify-center">
                <button type="button"
                onClick={() => setPickerOpen((o) => !o)}
                className="relative h-40 w-40 rounded-full"
                aria-label="Choose pokeball"
                >
                <Pokeball id={pokeball} size={130} className="h-36 w-36" />
                <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm text-accent-foreground shadow">
                    <i className="fa-solid fa-pen-to-square" />
                </span>
                </button>

                {pickerOpen && (
                    <div className="absolute left-4 top-36 z-30">
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

                <div className="space-y-5">
                    <label className="block text-sm text-foreground/80">
                    Name
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </label>

                    <label className="block text-sm text-foreground/80">
                    E-mail
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </label>

                    <label className="block text-sm text-foreground/80">
                    Password
                    <div className="relative">
                        <Input
                        type={showPassword ? "text" : "password"}
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

            <SheetFooter className="flex-row items-center justify-end gap-6">
                <PixelButton variant="default" onClick={handleCancel} className="font-bold text-accent">
                    Cancel
                </PixelButton>
                <PixelButton variant="destructive" onClick={handleSave} className="rounded-xl px-10 font-bold">
                    Save
                </PixelButton>
            </SheetFooter>
        </SheetContent>
        </Sheet>
    );
}