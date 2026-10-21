'use client';

import Link from "next/link";
import { Button } from "../ui/button";

interface UserMenuProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  userName?: string;
}

export function UserMenu({ isLoggedIn, onLogout, userName }: UserMenuProps) {
  // if logged in, shows the name and logout btn
  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-4 animate-in fade-in duration-500">
        <div className="flex items-center gap-2 bg-foreground/20 px-4 py-2 rounded-full border border-foreground/30 backdrop-blur-sm">
           <i className="fa-solid fa-user text-foreground"></i>
           <span className="text-foreground font-bold text-sm lg:text-base truncate max-w-[150px]">
             {userName || "Trainer"}
           </span>
        </div>

        <Button
          onClick={onLogout}
          variant="ghost"
          className="text-foreground hover:text-foreground/80 hover:bg-cardA transition-colors"
          title="Logout"
        >
          <i className="fa-solid fa-right-from-bracket text-xl"></i>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-2 lg:gap-4 items-center">
      <Link href="/signin">
        <Button
            variant="ghost"
            className="text-foreground font-bold text-base hover:text-foreground/80 hover:bg-background/10"
        >
            Sign in
        </Button>
      </Link>

      <Link href="/signup">
        <Button
            className="bg-accent text-accent-foreground font-extrabold text-base hover:bg-chart-4 border-b-4 border-chart-5 active:border-b-0 active:translate-y-1 transition-all rounded-xl shadow-lg"
        >
            Sign up
        </Button>
      </Link>

    </div>
  );
}