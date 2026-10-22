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
    const inputClass = "h-12 text-lg rounded border-[var(--background)]/30 placeholder:text-foreground/20";
    return (
        <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-4">
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
                    className={`${inputClass}`}/>

                {/* INPUT PASSWORD */}
                <Input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    className={`${inputClass}`}/>

                {/* btn START */}
                <Button
                    variant="success"
                    onClick={handleSubmit}
                    disabled={isPending}
                    >
                    {isPending ? 'Loading...' : 'Start'}
                </Button>
            </div>

            <div className="mt-8 flex flex-col items-center w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Separator className="mb-6 bg-black/20" />
            {/* register btn*/}
            <Link href="/signup" className="w-full flex justify-center">
                <Button
                    variant="secondary">
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