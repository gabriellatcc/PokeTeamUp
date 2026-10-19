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
        <footer className="w-full bg-[var(--chart-4)] py-4 px-6">
            <div
                className={`${notoSans.className} text-foreground/80 drop-shadow-md text-xs xl:text-sm max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-8 text-center lg:whitespace-nowrap`}
            >
                <p>Data provided by PokéAPI and includes material from Pokémon. © 2026 Pokémon.</p>
                <p>
                Developed by <strong className="text-foreground">Gabriella Corrêa</strong>
                </p>
                <p>This is a non-profit project for study and portfolio purposes.</p>
            </div>
        </footer>
    );
}