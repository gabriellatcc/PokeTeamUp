'use client';

import { usePathname } from 'next/navigation';
import { Noto_Sans_Devanagari } from 'next/font/google';

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
    <footer className="relative w-full bg-background py-8 px-6 text-foreground/30 border-t-4 border-secondary">
      <div className={`${notoSans.className} mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 text-center text-xs text-muted xl:text-sm lg:text-left`}>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 pb-6 border-b border-muted/10">
          <div>
            <p className="font-bold text-muted text-sm">PokeTeam Up Portfolio</p>
            {/* <p className="text-xs text-muted/60 mt-0.5">Built with Next.js, Laravel & Tailwind CSS</p> */}
          </div>

          <div className="flex items-center gap-6 font-medium text-muted">
            <a href="https://github.com/gabriellatcc" target="_blank" rel="noopener noreferrer" className="hover:text-[color-mix(in_srgb,var(--background)_50%,var(--shadow-color)_80%)] dark:hover:text-chart-2 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/gabriellatccorrea" target="_blank" rel="noopener noreferrer" className="hover:text-[color-mix(in_srgb,var(--background)_50%,var(--shadow-color)_80%)] dark:hover:text-chart-2 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:gabriellatccorrea@gmail.com" className="hover:text-[color-mix(in_srgb,var(--background)_50%,var(--shadow-color)_80%)] dark:hover:text-chart-2 transition-colors">
              Contato
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
          <p>Data provided by PokéAPI and includes material from Pokémon. © 2026 Pokémon.</p>
          <p>This is a non-profit project for study and portfolio purposes.</p>
        </div>

      </div>
    </footer>
  );
}