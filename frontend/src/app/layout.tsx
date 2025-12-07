import type { Metadata } from "next";

import "./globals.css";

import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

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
        <div className="h-screen flex flex-col justify-between">
          <Header></Header>
            <div>{children}</div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}