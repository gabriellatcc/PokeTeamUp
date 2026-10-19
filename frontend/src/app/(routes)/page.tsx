'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/pixelact-ui/button';
import { StackSection } from '../../components/home/stack-section';
import { ROUTE_BACKGROUNDS } from '../../lib/content/site-content';

import { Pixelify_Sans } from 'next/font/google';

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
          <h1 className={`${pixelFont.className} inline-block text-5xl md:text-7xl font-extrabold text-chart-5 dark:text-chart-4 leading-tight mb-4`}>
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

      {/* RESTO DA PÁGINA: fundo sólido normal */}
      <div className="relative z-[2] w-full bg-card">
        <StackSection />

        <div className="w-full py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`${pixelFont.className} text-4xl md:text-5xl font-extrabold text-foreground mb-8`}>
              PROJECT INFO
            </h2>
            <p className="text-lg text-foreground max-w-4xl mx-auto">
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