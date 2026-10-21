"use client";

import React, { useState } from 'react';
import { Button as PixelButton } from '@/components/ui/pixelact-ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from "@//components/ui/separator";
import { Checkbox } from "@//components/ui/pixelact-ui/checkbox";
import { TermsSheet } from "@//components/auth/terms-sheet";
// import { useRegister } from '@/hooks/useAuth';
import Link from 'next/link';
import { toastApiError, toastApiSuccessFromBody } from '@/lib/api-toast';

export function SignupForm(){
    //   const { mutate: registerUser, isPending, error } = useRegister();
    const [isPending, setIsPending] = useState(false);

    //state to store data
        const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    //update the state when typing.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // send/submit
    const handleSubmit = () => {
    // basic validation if password matches
    // if(formData.password !== formData.password_confirmation) {
    //     alert("Passwords do not match!");
    //     return;
    // }
    // registerUser(formData);
        if (!formData.name || !formData.email || !formData.email || !formData.password_confirmation) {
            toastApiError("Please fill in all fields");
            return;
        }

        setIsPending(true);

        setTimeout(() => {
            toastApiSuccessFromBody("The Backend is disabled right now, but thank you for testing!");
            setIsPending(false)
        }, 800);
    };
    return(
        <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-4">
            <div className="flex items-center mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="z-20 bg-[var(--chart-1)] p-4 rounded-2xl shadow-lg border border-muted/20 flex items-center justify-center w-16 h-16 shrink-0">
                <i className="fa-solid fa-user-plus text-muted text-3xl"></i>
            </div>
            <div className="z-10 -ml-6 pl-8 pr-8 flex items-center h-16 bg-gradient-to-r from-[var(--chart-2)]/90 to-[var(--chart-2)]/70 backdrop-blur-md rounded-r-2xl shadow-md border-y border-r border-muted/10">
                <h1 className="text-4xl font-bold text-muted drop-shadow-md tracking-wide leading-none" >
                Sign up
                </h1>
            </div>
            </div>

            <div className="w-full space-y-4 flex flex-col items-center animate-in fade-in zoom-in-95 duration-500 delay-150">
                {/* {error && (
                    <div className="w-full p-2 bg-red-500/80 text-muted rounded text-sm text-center">
                        {(error as any).response?.data?.message || "Error creating account"}
                    </div>
                )} */}
                <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Create a username"
                />
                <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter an email"
                />
                <Input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    placeholder="Create a password"
                />
                <Input
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    type="password"
                    placeholder="Confirm your password"
                />
                <div className="flex items-start space-x-2 w-full">
                    <Checkbox id="terms" className="peer mt-1 flex-shrink-0 border-foreground dark:border-[var(--accent-foreground)]" />
                    <label htmlFor="terms" className="text-sm font-normal leading-snug cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-wrap items-center">
                        <span className="mutedspace-nowrap mr-1">I read and agree to the</span>
                         <TermsSheet>
                            <PixelButton
                                variant="link"
                                className="text-secondary underline hover:text-secondary/80"
                            >
                                Terms and Privacy Policy
                            </PixelButton>
                        </TermsSheet>
                    </label>
                </div>

                <PixelButton
                    onClick={handleSubmit}
                    disabled={isPending}
                    className="w-full h-12 text-xl font-bold rounded-xl shadow-lg mt-4 bg-[var(--chart-1)] hover:bg-[var(--chart-1)] text-muted border-b-4 border-foreground dark:border-[var(--accent-foreground)] active:scale-95 active:border-b-0 active:translate-y-1 transition-all">
                    {isPending ? 'Creating...' : 'Continue'}
                </PixelButton>
            </div>

            <div className="mt-8 flex flex-col items-center w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Separator className="mb-6 bg-foreground/20 dark:bg-[var(--accent-foreground)]/20" />
            <Link href="/signin" className="w-full flex justify-center">
                <PixelButton
                    variant="default"
                    className="px-12 py-1   text-lg h-auto border-2 border-muted text-background bg-transparent hover:bg-muted/20">
                    Already have an account? Login
                </PixelButton>
            </Link>
            </div>
        </div>
    );
}