'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/pixelact-ui/button';
import { StackSection } from '../../components/home/stack-section';
import { ROUTE_BACKGROUNDS } from '../../lib/content/site-content';

import { Pixelify_Sans } from 'next/font/google';
import { ProjectCard } from '@/components/home/project-card';

const pixelFont = Pixelify_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

export default function HomeScreen() {
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-start bg-background overflow-x-hidden">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <div className="relative w-full overflow-hidden">
        <Image
          src={ROUTE_BACKGROUNDS["/home"]}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover z-0"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto py-16 md:pt-40 md:pb-16 text-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className={`${pixelFont.className} text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-8 bg-background dark:text-foreground dark:bg-[var(--border)]`}>
              Explore the Pokédex and build the ultimate team.
            </p>
            <p className={`${pixelFont.className} text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-8 bg-background dark:text-foreground dark:bg-[var(--border)]`}>
              Star your favorite Pokémon to keep them just a click away.
            </p>
          </div>
          <h1 className={`${pixelFont.className} mx-auto mb-4 max-w-[16ch] text-balance text-3xl font-extrabold leading-tight text-chart-5 sm:max-w-[20ch] sm:text-5xl md:max-w-[24ch] md:text-6xl lg:text-7xl dark:text-chart-4`}
          >
            THERE ARE POKÉMONS WAITING FOR YOU ! !
          </h1>

          <div>
            <Button
              className={`${pixelFont.className} bg-chart-4/90 text-foreground hover:bg-chart-4 transition-all duration-300 px-12 py-7 text-xl font-bold border-2 border-chart-5 h-6 w-60`}
              size="lg">
              Try
            </Button>
          </div>
        </div>
      </div>

      {/* RESTO DA PÁGINA */}
      <div className="relative z-[2] w-full bg-card pb-10">
        <StackSection />
        <ProjectCard />
      </div>
    </section>
  );
}