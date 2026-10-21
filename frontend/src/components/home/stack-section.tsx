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
      <div className="relative bg-background px-4 pt-16 pb-10 text-center text-card dark:bg-secondary">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-muted/40 px-4 py-1.5 text-sl tracking-wider text-foreground/70 backdrop-blur-md border border-card/10 dark:text-foreground/90">
          <span className="h-2 w-2 rounded-full bg-chart-4 animate-pulse" style={{ animationDuration: '1s' }}/>
          Technical Specifications & Architecture
        </div>

        <h2 className="font-(family-name:--font-pixel) text-3xl font-extrabold uppercase tracking-widest text-card drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl mb-4 dark:text-foreground">
          FULL STACK OVERVIEW
        </h2>

        <p className="mx-auto max-w-2xl text-sm font-medium text-card sm:text-base opacity-90 dark:text-foreground">
          Explore the scalable, high-performance architecture driving PokeTeam Up forward.
        </p>
      </div>

      <div className="relative z-10 -mt-1 h-3 w-full bg-muted shadow-md dark:bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-muted dark:to-transparent dark:shadow-none">
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-muted shadow-2xl  dark:border-card">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted shadow-2xl transition-transform hover:scale-[1.3] dark:border-card/90 dark:bg-muted" />
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