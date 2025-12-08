import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
    <html lang="en">
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