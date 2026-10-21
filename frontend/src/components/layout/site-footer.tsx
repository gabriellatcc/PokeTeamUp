'use client';

import { usePathname } from 'next/navigation';
import { Noto_Sans_Devanagari } from 'next/font/google';
import { Github, Linkedin, Mail } from 'lucide-react';

const notoSans = Noto_Sans_Devanagari({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/myteams') {
    return null;
  }

  return (
   <footer className="relative w-full py-8 px-6 text-foreground border-t-4 border-destructive/50 dark:border-background bg-background dark:bg-chart-1">
      <div className={`${notoSans.className} mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 text-center text-sm text-foreground xl:text-base lg:text-left`}>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 pb-6 border-b border-foreground/20">
          <div>
            <p className="font-bold text-foreground text-base">PokeTeam Up Portfolio</p>
            <p className="text-sm text-foreground/90 mt-0.5">Built with Next.js, Laravel & Tailwind CSS</p>
          </div>

        <div className="flex flex-wrap items-center gap-6 font-medium text-foreground">
            <a href="https://github.com/gabriellatcc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[color-mix(in_srgb,var(--background)_50%,var(--shadow-color)_80%)] dark:hover:text-chart-2 ">
                <Github className="w-5 h-5" />
                gabriellatcc
            </a>
            <a href="https://www.linkedin.com/in/gabriellatccorrea" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[color-mix(in_srgb,var(--background)_50%,var(--shadow-color)_80%)] dark:hover:text-chart-2">
                <Linkedin className="w-5 h-5" />
                gabriellatccorrea
            </a>
            <a href="mailto:gabriellatccorrea@gmail.com" className="flex items-center gap-2 hover:text-[color-mix(in_srgb,var(--background)_50%,var(--shadow-color)_80%)] dark:hover:text-chart-2 ">
                <Mail className="w-5 h-5" />
                gabriellatccorrea@gmail.com
            </a>
        </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 text-foreground/90 text-sm">
          <p>Data provided by PokéAPI and includes material from Pokémon. © 2026 Pokémon.</p>
          <p>This is a non-profit project for study and portfolio purposes.</p>
        </div>

      </div>
    </footer>
  );
}