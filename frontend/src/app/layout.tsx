import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/src/providers/ReactQueryProvider"; 
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { Noto_Sans } from 'next/font/google';

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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <ReactQueryProvider>
        <div className="h-screen flex flex-col">          
          <Header />
            <main className="flex-1 w-full relative flex flex-col">
              {children}
            </main>
          <Footer />
        </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}