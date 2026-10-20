import React from 'react';
import { Pixelify_Sans } from 'next/font/google';
import { StackCard } from './stack-card';
import { TECH_STACK } from '@/lib/content/stack-content';

const pixelFont = Pixelify_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

export const StackSection: React.FC = () => {
  return (
    <section className={`${pixelFont.variable} relative w-full overflow-hidden bg-card`}>
      <div className="relative bg-background px-4 pt-16 pb-24 text-center text-card">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-foreground/20 px-4 py-1.5 text-xs font-semibold tracking-wider text-card backdrop-blur-md border border-card/10">
          <span className="h-2 w-2 rounded-full bg-chart-4 animate-pulse" />
          Technical Specifications & Architecture
        </div>

        <h2 className="font-(family-name:--font-pixel) text-3xl font-extrabold uppercase tracking-widest text-card drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl mb-4">
          FULL STACK OVERVIEW
        </h2>

        <p className="mx-auto max-w-2xl text-sm font-medium text-card sm:text-base opacity-90">
          Explore the scalable, high-performance architecture driving PokeTeam Up forward.
        </p>
      </div>

      <div className="relative z-10 -mt-1 h-3 w-full bg-foreground shadow-md">
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-foreground/30 bg-card shadow-lg transition-transform hover:scale-105">
          <div className="h-7 w-7 rounded-full border-2 border-foreground/90 bg-card shadow-inner flex items-center justify-center">
            <div className="h-2.5 w-2.5 rounded-full bg-card border border-card" />
          </div>
        </div>
      </div>

      <div className="relative z-0 bg-card px-4 pt-16 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK.map((tech, index) => (
              <StackCard key={index} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;