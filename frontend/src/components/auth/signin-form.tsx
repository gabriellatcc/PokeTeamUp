"use client";

import { Button } from '../../components/ui/pixelact-ui/button';
import { Input } from '../../components/ui/input';
import { Separator } from "../../components/ui/separator";
import Link from 'next/link';

import React, { useState } from 'react';

// import { useLogin } from '@/hooks/useAuth';
import { toastApiError, toastApiSuccessFromBody } from '@/lib/api-toast';

export function SigninForm(){
    //calls the hook
    // const { mutate: loginUser, isPending, error } = useLogin();

    const [isPending, setIsPending] = useState(false);

    // create state
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // update the state whe digiting
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // submit btn uses
    const handleSubmit = () => {
        if (!formData.email || !formData.password) {
            ("Please fill in all fields");
            return;
        }

        setIsPending(true);

        setTimeout(() => {
            toastApiSuccessFromBody("The Backend is disabled right now, but thank you for testing!");
            setIsPending(false)
       }, 800);
    };

    return (
        <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-4">
                <div className="flex items-center mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="z-20 bg-[var(--chart-1)] p-4 rounded-2xl shadow-lg border border-muted/20 flex items-center justify-center w-16 h-16 shrink-0">
                    <i className="fa-solid fa-right-to-bracket text-muted text-4xl"></i>
                </div>
                <div className="z-10 -ml-6 pl-8 pr-8 flex items-center h-16 bg-gradient-to-r from-[var(--chart-2)]/90 to-[var(--chart-2)]/70 backdrop-blur-md rounded-r-2xl shadow-md border-y border-r border-muted/10">
                    <h1 className="text-4xl font-bold text-muted drop-shadow-md tracking-wide leading-none" >
                    Sign in
                    </h1>
                </div>
                </div>

                {/* FORM */}
                <div className="w-full space-y-4 flex flex-col items-center animate-in fade-in zoom-in-95 duration-500 delay-150">
                {/* error if fail */}
                {/* {error && (
                    <div className="w-full p-3 bg-red-500/90 text-muted rounded-md text-sm text-center border border-red-700">
                        Email or Password incorrect.
                    </div>
                )} */}

                {/* INPUT EMAIL */}
                <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                    className="h-12 text-lg rounded-md shadow-sm border-muted/0 focus-visible:ring-[var(--chart-1)] bg-foreground"/>

                {/* INPUT PASSWORD */}
                <Input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    className="h-12 text-lg rounded-md shadow-sm border-muted/50 focus-visible:ring-[var(--chart-1)] bg-foreground"/>

                {/* btn START */}
                <Button
                    onClick={handleSubmit}
                    disabled={isPending}
                    className="w-full h-12 text-xl font-bold rounded-xl shadow-lg mt-4 bg-[var(--chart-1)] hover:bg-[var(--chart-1)] text-muted border-b-4 border-border active:scale-95 active:border-b-0 active:translate-y-1 transition-all">
                    {isPending ? 'Loading...' : 'Start'}
                </Button>

                </div>

                <div className="mt-8 flex flex-col items-center w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <Separator className="mb-6 bg-black/20" />
                {/* register btn*/}
                <Link href="/signup" className="w-full flex justify-center">
                    <Button
                        variant="default"
                        className="px-12 py-1 text-lg h-auto border-2 border-muted text-background bg-transparent hover:bg-muted]/20 hover:text-background active:scale-95 active:translate-y-1 transition-all">
                        Register
                    </Button>
                </Link>

                <p className="mt-4 text-background text-sm font-semibold bg-transparent px-3 py-1">
                    Forgot your password?
                    <a href="#" className="font-bold text-muted hover:text-[var(--chart-2)] hover:underline ml-1 transition-colors">Click here</a>
                </p>
                </div>

        </div>
    );
}