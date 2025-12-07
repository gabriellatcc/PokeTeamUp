"use client";

import { usePathname } from "next/navigation";
import { NavigationBar } from "@/src/components/NavigationBar/NavigationBar";
import { UserMenu } from "@/src/components/UserMenu/UserMenu";
import { Logo } from "@/src/components/Logo/Logo";

export default function Header() {
  const pathname = usePathname();

  //logic to simulate user logged in (true) and not logged in (false)
  const isLoggedIn = false;

  const handleLogout = () => console.log("Logout function");

  //this sequence here is to define the header background by checking if the current page is one in the bluePlage array, if it does *
  const bluePages = ["/signin", "/signup", "/home", "/"];
  const isBluePage = bluePages.includes(pathname);
  const headerColor = isBluePage ? "bg-[#79CAF9]" : "bg-[#D83138]";//* will be blue, if it doesn't means that is other type of page and will be a red color

  const authPages = ["/signin", "/signup"];
  const isAuthPage = authPages.includes(pathname);


  return (
    <header
      className={`${headerColor} w-full shadow-md transition-colors duration-300 relative z-50`}
    >
      <nav className="relative flex justify-between items-center max-w-7xl mx-auto h-24 px-4">
        
        {/* left navegation */}
        <NavigationBar />

        {/* logo in center */}
        <Logo />

        {/* user actions as sign in or up*/}
        {/* the Header decides if has to expose the menu, and this last one decides WHAT to expose*/}
        {!isAuthPage && (
            <UserMenu isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        )}
      </nav>
    </header>
  );
}