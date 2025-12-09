"use client";

import { usePathname } from "next/navigation";
import { NavigationBar } from "@/components/NavigationBar/NavigationBar";
import { UserMenu } from "@/components/UserMenu/UserMenu";
import { Logo } from "@/components/Logo/Logo";

export default function Header() {
  const pathname = usePathname();

  const isLoggedIn = false;
  const handleLogout = () => console.log("Logout function");

  const bluePages = ["/signin", "/signup", "/home", "/", "/pokedex"];
  const isBluePage = bluePages.includes(pathname);
  const headerColor = isBluePage ? "bg-[#79CAF9]" : "bg-[#D83138]";

  const authPages = ["/signin", "/signup"];
  const isAuthPage = authPages.includes(pathname);

  return (
    <header
      className={`${headerColor} w-full shadow-md transition-colors duration-300 relative z-50 min-h-[96px] py-4 lg:py-0 flex items-center`}
    >
      <nav 
        className="flex flex-wrap justify-between lg:grid lg:grid-cols-3 items-center max-w-7xl mx-auto w-full px-4 sm:px-8 gap-y-2 lg:gap-y-0"
      >
        
        {/* nav menu */}
        <div className="order-3 w-full flex justify-center mt-6 lg:mt-0 lg:order-none lg:w-auto lg:justify-start">
          <NavigationBar currentPath={pathname} />
        </div>

        {/* logo */}
        <div className="order-1 flex justify-center lg:justify-center">
          <Logo />
        </div>

        {/* user menu to sign in/sign up */}
        <div className="order-2 flex justify-end">
          {!isAuthPage && (
              <UserMenu isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          )}
        </div>

      </nav>
    </header>
  );
}