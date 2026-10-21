'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { Button as PixelButton } from "../ui/pixelact-ui/button";
import { UserAvatar } from "../user-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface UserMenuProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
}

export function UserMenu({ isLoggedIn, onLogout, userName, userEmail, userAvatar }: UserMenuProps) {
  if (isLoggedIn) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex items-center gap-2 bg-foreground/20 px-4 py-2 rounded-full border border-foreground/30 backdrop-blur-sm cursor-pointer hover:bg-foreground/30 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <UserAvatar avatar={userAvatar} size={32} />
            <span className="text-foreground font-bold text-sm lg:text-base truncate max-w-[150px]">
              {userName || "Trainer"}
            </span>
            <i className="fa-solid fa-chevron-down text-xs text-foreground/70 ml-1"></i>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-64 rounded-2xl p-2 shadow-xl">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl mb-1">
            <UserAvatar avatar={userAvatar} size={40} />
            <div className="flex flex-col overflow-hidden">
              <span className="font-bold text-sm truncate text-foreground">
                {userName || "Trainer"}
              </span>
              <span className="text-xs text-muted-foreground truncate">
                {userEmail || "trainer@pokemon.com"}
              </span>
            </div>
          </div>

          <DropdownMenuSeparator className="my-1" />

          <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-2">
            <Link href="/settings" className="flex items-center gap-2 w-full font-medium">
              <i className="fa-solid fa-gear text-muted-foreground w-4"></i>
              Settings
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="my-1" />

          <DropdownMenuItem
            onClick={onLogout}
            className="rounded-lg cursor-pointer py-2 text-destructive focus:text-destructive focus:bg-destructive/10 font-medium"
          >
            <div className="flex items-center gap-2 w-full">
              <i className="fa-solid fa-right-from-bracket w-4"></i>
              Logout
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex gap-2 lg:gap-4 items-center">
      <Link href="/signin">
        <PixelButton
            variant="secondary"
            className="text-foreground font-bold text-base hover:text-foreground/80 hover:bg-background/10"
        >
            Sign in
        </PixelButton>
      </Link>

      <Link href="/signup">
        <PixelButton
            variant="secondary"
            className="bg-accent text-accent-foreground font-extrabold text-base hover:bg-chart-4 border-b-4 border-chart-5 active:border-b-0 active:translate-y-1 transition-all rounded-xl shadow-lg"
        >
            Sign up
        </PixelButton>
      </Link>
    </div>
  );
}