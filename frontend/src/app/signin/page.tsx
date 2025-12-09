'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';
import { useLogin } from '@/src/hooks/useAuth';

export default function LoginScreen() {
  //calls the hook
  const { mutate: loginUser, isPending, error } = useLogin();

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
        alert("Please fill in all fields");
        return;
    }
    loginUser(formData);
  };

  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden min-h-screen">
       
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img src="/images/auth-bg.jpg" alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* FORM CARD */}
      <main className="relative z-10 flex flex-col items-center w-full max-w-sm px-4">

        <div className="flex items-center mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="z-20 bg-[#3B4CCA] p-4 rounded-2xl shadow-lg border border-white/20 flex items-center justify-center w-16 h-16 shrink-0">
            <i className="fa-solid fa-right-to-bracket text-white text-4xl"></i>
          </div>
          <div className="z-10 -ml-6 pl-8 pr-8 flex items-center h-16 bg-gradient-to-r from-[#5ca0d3]/90 to-[#5ca0d3]/70 backdrop-blur-md rounded-r-2xl shadow-md border-y border-r border-white/10">
            <h1 className="text-4xl font-bold text-white drop-shadow-md tracking-wide leading-none" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Sign in
            </h1>
          </div>
        </div>

        {/* FORM */}
        <div className="w-full space-y-4 flex flex-col items-center animate-in fade-in zoom-in-95 duration-500 delay-150">
          
          {/* error if fail */}
          {error && (
            <div className="w-full p-3 bg-red-500/90 text-white rounded-md text-sm text-center border border-red-700">
                Email or Password incorrect.
            </div>
          )}

          {/* INPUT EMAIL */}
          <Input 
            name="email"
            value={formData.email}
            onChange={handleChange} 
            type="email" 
            placeholder="Email" 
            className="h-12 text-lg rounded-md shadow-sm border-white/0 focus-visible:ring-[#3B4CCA] bg-[#f2f2f2]"
          />

          {/* INPUT PASSWORD */}
          <Input 
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password" 
            placeholder="Password" 
            className="h-12 text-lg rounded-md shadow-sm border-white/50 focus-visible:ring-[#3B4CCA] bg-[#f2f2f2]"
          />

          {/* btn START */}
          <Button 
            onClick={handleSubmit} 
            disabled={isPending}
            className="w-full h-12 text-xl font-bold rounded-xl shadow-lg mt-4
                       bg-[#3B4CCA] hover:bg-[#4e5dcf] text-white 
                       border-b-4 border-[#3a0082] active:scale-95 active:border-b-0 active:translate-y-1 transition-all"
          >
            {isPending ? 'Loading...' : 'Start'}
          </Button>

        </div>

        <div className="mt-8 flex flex-col items-center w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          
          <Separator className="mb-6 bg-black/20" />
          
          {/* register btn*/}
          <Link href="/signup" className="w-full flex justify-center">
            <Button 
                variant="outline" 
                className="px-12 py-1 rounded-full text-lg h-auto
                        border-2 border-[#0F3F7A] text-[#212121] bg-transparent
                        hover:bg-[#0F3F7A]/20 hover:text-[#151515] active:scale-95 active:translate-y-1 transition-all"
            >
                Register
            </Button>
          </Link>

          <p className="mt-4 text-[#212121] text-sm font-semibold bg-transparent px-3 py-1">
            Forgot your password? 
            <a href="#" className="font-bold text-[#0F3F7A] hover:text-[#5ca0d3] hover:underline ml-1 transition-colors">Click here</a>
          </p>
        </div>

      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap');
        div, section, main { font-family: 'Noto Sans Devanagari', sans-serif; }
      `}</style>
    </section>
  );
}