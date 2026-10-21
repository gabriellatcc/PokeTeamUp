'use client';

import React from 'react';
import Image from 'next/image';
import { StackSection } from '../../../components/home/stack-section';
import { ROUTE_BACKGROUNDS } from '../../../lib/content/site-content';

import { Pixelify_Sans } from 'next/font/google';
import { ProjectCard } from '@/components/home/project-card';
import { DemoLoginButton } from "@/components/auth/demo-signin-button";

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

        <div className={`${pixelFont.className} absolute right-4 top-4 z-20 flex max-w-[16rem] items-start gap-3 rounded-xl border border-[var(--shadow-color)] bg-card/60 px-4 py-3 text-xs text-foreground shadow-md backdrop-blur-md sm:right-6 sm:top-6 sm:max-w-xs sm:text-sm animate-bounce [animation-duration:1s] motion-reduce:animate-none`}>
          <span
            className="mt-1 h-2 w-2 shrink-0 animate-pulse rounded-full bg-chart-4"
            aria-hidden="true"
          />
          <p>
            Explore the Pokédex, build the ultimate team and star your favorite Pokémon.
          </p>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-16 pb-40 text-center md:pt-40 md:pb-56">
          <h1 className={`${pixelFont.className} mx-auto mb-8 max-w-[16ch] text-balance text-3xl font-extrabold leading-tight text-muted drop-shadow-[4px_4px_0_var(--shadow-color)] sm:max-w-[20ch] sm:text-5xl md:max-w-[24ch] md:text-6xl lg:text-7xl`}>
            THERE ARE POKÉMONS WAITING FOR YOU ! !
          </h1>

          <DemoLoginButton/>
        </div>
      </div>

      <div className="relative z-[2] w-full bg-card pb-10">
        <StackSection />
        <ProjectCard />
      </div>
    </section>
  );
}