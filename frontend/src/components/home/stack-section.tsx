import React from 'react';

import { Pixelify_Sans } from 'next/font/google';
import { StackCard } from './stack-card';
import { TECH_STACK } from '@/lib/content/stack-content';

const pixelFont = Pixelify_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

export const StackSection: React.FC = () => {
    return (
        <section className="relative z-[2] w-full bg-black py-16 md:py-10 px-4">
            {/* TITLES AND ALL CARD ARE IN THIS DIV*/}
            <div className="max-w-7xl mx-auto">
                {/* TITLE 1 DIV*/}
                <div className="flex items-center justify-center space-x-4 mb-10">
                    <span className="text-sm font-semibold text-[#chart-4] whitespace-nowrap tracking-widest">
                        TECHNICAL SPECIFICATIONS
                    </span>
                </div>
                {/* TITLE 2*/}
                <h2 className={`${pixelFont.className} text-center text-4xl md:text-5xl pb- 4font-extrabold text-white mb-6 md:mb-8 max-w-4xl mx-auto leading-snug `}>
                    FULL STACK OVERVIEW
                </h2>
                {/* <div className="relative z-[2] w-full max-w-7xl mx-auto pt-6 pb-4 md:pt-2 md:pb-8 text-center px-4">
                    <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto mb-8">
                        Explore the Pokédex, view detailed stats, and build the ultimate team. Star your favorite Pokémon to keep them just a click away.
                    </p>
                </div> */}
                {/* GRID DIV FOR CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TECH_STACK.map((tech, index) => (
                        <StackCard key={index} {...tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StackSection;