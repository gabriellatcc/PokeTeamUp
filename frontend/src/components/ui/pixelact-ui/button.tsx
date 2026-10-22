import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "@/components/ui/button";

const pixelBase = [
  "relative",
  "shadow-[0_-4px_0_0_var(--tw-shadow-color),0_4px_0_0_var(--tw-shadow-color),-4px_0_0_0_var(--tw-shadow-color),4px_0_0_0_var(--tw-shadow-color)]",
  "shadow-popover-foreground dark:shadow-muted/80",
  "after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-full after:h-full",
  "active:translate-y-[3px]",
].join(" ");

const pixelColored = [
  "bg-[var(--sidebar-primary)] dark:bg-secondary",
  "hover:bg-[var(--chart-1)] dark:hover:bg-background/40",
  "active:bg-[var(--chart-1)]",
  "after:border-solid after:border-r-4 after:border-b-4",
  "after:border-r-background",
  "after:border-b-background",
].join(" ");

const pixelButtonVariants = cva(
  [
    pixelBase,
    "pixel-font cursor-pointer rounded-none w-fit items-center justify-center",
    "whitespace-nowrap text-sm transition-all duration-100",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "text-sm font-bold rounded-xl shadow-lg mt-4 text-muted",
          "bg-[var(--chart-1)] border-b-4 border-border",
          "[--pixel-inner:var(--default-inner-border-color)]",
          "[--pixel-mix-into:rgb(0,0,0)]",
          "hover:bg-[var(--pixel-inner)]",
          "active:bg-[color-mix(in_hsl,var(--pixel-inner)_70%,var(--pixel-mix-into))]",
          "after:border-solid after:border-r-4 after:border-b-4",
          "after:border-r-[color:color-mix(in_hsl,var(--pixel-inner)_70%,var(--pixel-mix-into))]",
          "after:border-b-[color:color-mix(in_hsl,var(--pixel-inner)_70%,var(--pixel-mix-into))]",
          "active:scale-95 active:border-b-0",
        ].join(" "),

        secondary:
          "text-sm font-bold rounded-xl mt-4 text-muted bg-background hover:bg-background/85 active:scale-95",

        success: [
          pixelColored,
          "[--pixel-base:var(--chart-1)] [--pixel-mix-into:rgb(0,0,0)]",
          "w-full h-12 text-xl font-bold rounded-xl mt-4 text-[var(--muted)]"
        ].join(" "),

        destructive: [
          pixelColored,
          "[--pixel-base:var(--destructive)] [--pixel-mix-into:rgb(77,77,77)]",
          "text-[var(--destructive-foreground)] box-shadow-margin",
        ].join(" "),

        warning: [
          pixelColored,
          "[--pixel-base:var(--warning)] [--pixel-mix-into:rgb(32,32,32)]",
          "text-[var(--warning-foreground)]",
        ].join(" "),

        link: [
          "shadow-none m-0 p-0 bg-transparent underline underline-offset-4",
          "[--pixel-mix-into:rgb(0,0,0)]",
          "text-[var(--link)] hover:bg-transparent",
          "hover:text-[color-mix(in_hsl,var(--link)_70%,var(--pixel-mix-into))]",
          "active:text-[color-mix(in_hsl,var(--link)_90%,var(--pixel-mix-into))]",
          "visited:text-[color-mix(in_hsl,var(--link)_70%,var(--pixel-mix-into))]",
        ].join(" "),
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface PixelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pixelButtonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<
  React.ComponentRef<typeof ShadcnButton>,
  PixelButtonProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <ShadcnButton
      {...props}
      className={cn(pixelButtonVariants({ variant, size }), className)}
      ref={ref}
    />
  );
});

export { Button };