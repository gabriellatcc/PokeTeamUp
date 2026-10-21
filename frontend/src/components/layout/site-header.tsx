"use client";
import { usePathname } from "next/navigation";
// import { NavigationBar } from "../../components/layout/NavigationBar";

import { UserMenu } from "../settings/avatar-dropdown";

import { Logo } from "../../components/layout/Logo";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/pixelact-ui/button";
import { NAV_ITEMS } from "../../lib/content/site-content"
import Link from "next/link";
export default function Header() {
  const pathname = usePathname();
  // const { data: user, isLoading } = useUser();
  // const { mutate: logout } = useLogout();

  // const isLoggedIn = !!user;

  // const handleLogout = () => {
  //     logout();
  // };

  const { user, isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const authPages = ["/signin", "/signup"];
  const isAuthPage = authPages.includes(pathname);

  return (
    <header className="bg-background w-full transition-colors duration-300 relative z-50 flex flex-col items-center">
    <div className="w-full flex items-center justify-center py-3">
      <div className="w-16 h-16 rounded-full bg-background border-4 border-foreground relative flex items-center justify-center overflow-hidden shadow-inner shrink-0 hover:scale-105 transition-transform dark:bg-secondary dark:border-[var(--sidebar-accent)]">
        <div className="absolute bottom-0 w-full h-1/2 bg-muted border-t border-foreground dark:border-[var(--sidebar-accent)]" />
        <div className="w-6 h-6 bg-muted border-3 border-foreground dark:border-[var(--sidebar-accent)] rounded-full z-10" />
      </div>
      <Logo />
    </div>
      <nav className="flex flex-wrap justify-between lg:grid lg:grid-cols-3 items-center max-w-7xl mx-auto w-full px-4 sm:px-8 pb-3 gap-y-2 lg:gap-y-0">
        <div className="w-full flex justify-center lg:w-auto lg:justify-start gap-2">
          {NAV_ITEMS.map((item) => (
            <Button key={item.to} asChild>
              <Link href={item.to}>{item.label}</Link>
            </Button>
          ))}
        </div>

        <div className="hidden lg:block" />

        <div className="flex justify-end">
          {!isAuthPage && (
            <UserMenu
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              userName={user?.name}
              userAvatar={user?.avatar}
            />
          )}
        </div>
      </nav>
    </header>
  );
}