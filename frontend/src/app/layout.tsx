import type { Metadata } from "next";

import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Header from "../components/layout/site-header";
import Footer from "../components/layout/site-footer";

import { Noto_Sans } from 'next/font/google';
import { PageBackground } from "../components/layout/site-background";
import { ThemeProvider } from "../providers/theme-provider";
import { ThemeToggle } from "../components/layout/theme-toggle";
import { AuthProvider } from "@/contexts/auth-context";

// @ts-expect-error: CSS side-effect import has no type declarations
import "./global.css";

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
    <html lang="en" className={`${noto.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <ThemeProvider>
          <ReactQueryProvider>
            <AuthProvider>
              <div className="h-screen flex flex-col">
                <Header />
                <main className="flex-1 w-full relative flex flex-col">
                  <PageBackground />
                  <div className="relative z-10 flex-1">{children}</div>
                </main>
                <Footer />
              </div>
            </AuthProvider>
          </ReactQueryProvider>

          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}