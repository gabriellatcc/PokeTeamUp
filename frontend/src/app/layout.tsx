import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { Noto_Sans, Press_Start_2P } from 'next/font/google';

const noto = Noto_Sans({ 
  subsets: ['latin'], 
  variable: '--font-noto-sans'
});

export const metadata: Metadata = {
  title: "PokeTeam UP",
  description: "Pokémons teams app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${noto.variable}`}>
      <body>
        <div className="h-screen flex flex-col">          
          <Header />
            <main className="flex-1 w-full relative flex flex-col">
              {children}
            </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}