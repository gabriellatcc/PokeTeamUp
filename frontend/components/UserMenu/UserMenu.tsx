'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm">
           <i className="fa-solid fa-user text-white"></i>
           <span className="text-white font-bold text-sm lg:text-base truncate max-w-[150px]">
             {userName || "Trainer"}
           </span>
        </div>

        <Button 
          onClick={onLogout}
          variant="ghost" 
          className="text-white hover:text-red-200 hover:bg-white/10 transition-colors"
          title="Logout"
        >
          <i className="fa-solid fa-right-from-bracket text-xl"></i>
        </Button>
      </div>
    );
  }

  // if not logged in, shows the btns to sign in and sign up
  return (
    <div className="flex gap-2 lg:gap-4 items-center">
      <Link href="/signin">
        <Button 
            variant="ghost" 
            className="text-white font-bold text-base hover:text-white/80 hover:bg-white/10"
        >
            Sign in
        </Button>
      </Link>

      <Link href="/signup">
        <Button 
            className="bg-[#FFCB05] text-[#3B4CCA] font-extrabold text-base hover:bg-[#ffdd57] border-b-4 border-[#c7a008] active:border-b-0 active:translate-y-1 transition-all rounded-xl shadow-lg"
        >
            Sign up
        </Button>
      </Link>
    </div>
  );
}