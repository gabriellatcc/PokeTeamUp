'use client';

import React from 'react';
import { Button } from '../components/ui/button';
import { StackSection } from '../components/home/stack-section';

import { Pixelify_Sans } from 'next/font/google';

const pixelFont = Pixelify_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

export default function HomeScreen() {
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-start bg-black overflow-x-hidden">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* SECTION ABOVE IMAGE */}
        <div className="relative z-[2] w-full bg-black py-16 md:py-20 px-4">
            <div className="relative z-[2] w-full max-w-7xl mx-auto pt-24 pb-4 md:pt-40 md:pb-8 text-center px-4">
                <h1 className={`${pixelFont.className} text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4`}>
                    THERE ARE POKÉMONS WAITING FOR YOU
                </h1>
                <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto mb-8">
                    Explore the Pokédex, view detailed stats, and build the ultimate team. Star your favorite Pokémon to keep them just a click away.
                </p>
               <Button
                    className= {`${pixelFont.className} bg-[#chart-4] text-black hover:bg-[#chart-4]/90 transition-all duration-300 px-12 py-7 text-xl font-bold rounded-full shadow-lg hover:shadow-2xl border-2 border-[#chart-5] h-6 w-60`}
                    size="lg">
                    Try
                </Button>
            </div>

            {/* SECTION FULL STACK OVERVIEW */}
            <StackSection />

            <div className="relative z-[2] w-full bg-neutral-900 py-16 md:py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className={`${pixelFont.className} text-4xl md:text-5xl font-extrabold text-white mb-8`}>
                        PROJECT INFO
                    </h2>
                    <p className="text-lg text-neutral-300 max-w-4xl mx-auto">
                        PokeTeam Up is a modern web app powered by Next.js and Laravel, showcasing robust
                        integration with complex RESTful APIs. By transforming raw data and dynamically processing
                        images, it delivers a fluid user experience that redefines how fans explore the Pokédex.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}