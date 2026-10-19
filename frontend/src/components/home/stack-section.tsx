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
        <section className="relative z-[2] w-full bg-background py-16 md:py-10 px-4">
            {/* TITLES AND ALL CARD ARE IN THIS DIV*/}
            <div className="max-w-7xl mx-auto">
                {/* TITLE 1 DIV*/}
                <div className="flex items-center justify-center mb-3">
                    <span className="text-sm font-semibold text-chart-4 whitespace-nowrap tracking-widest text-foreground/70">
                        TECHNICAL SPECIFICATIONS
                    </span>
                </div>
                {/* TITLE 2*/}
                <h2 className="font-sans text-center text-4xl md:text-5xl font-extrabold text-foreground mb-6 md:mb-8 max-w-4xl mx-auto leading-snug">
                    FULL STACK OVERVIEW
                </h2>
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