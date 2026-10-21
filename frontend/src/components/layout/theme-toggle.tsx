"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { useTheme } from "../../providers/theme-provider";
import { Button } from "../../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { cn } from "../../../lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setMounted(true);
    setRotation(theme === "dark" ? 180 : 0);
  }, [theme]);

  const handleToggle = () => {
    const html = document.documentElement;
    html.classList.add("theme-transition");

    setRotation((current) => current + 180);
    toggleTheme();

    window.setTimeout(() => {
      html.classList.remove("theme-transition");
    }, 1050);
  };

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50 size-11 rounded-full border border-border bg-background" />
    );
  }

  const isDark = theme === "dark";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            onClick={handleToggle}
            aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
            className={cn(
              "fixed bottom-6 right-6 z-50 size-11 rounded-full border-border bg-background text-foreground hover:bg-card hover:text-foreground"
            )}
          >
            <span
              aria-hidden
              className="inline-flex text-foreground transition-transform duration-300 ease-in-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {isDark ? (
                <Moon className="size-5" style={{ transform: "rotate(180deg)" }} />
              ) : (
                <Sun className="size-5" />
              )}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{isDark ? "Switch to light mode" : "Switch to dark mode"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}