"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { POKEBALLS, pokeballSrc } from "@/lib/pokeballs";

export function Pokeball({
  id,
  size = 32,
  className,
}: {
  id: string;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={pokeballSrc(id)}
      alt={`${id} ball`}
      width={size}
      height={size}
      unoptimized
      className={cn("[image-rendering:pixelated]", className)}
    />
  );
}

export function PokeballPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div
      role="listbox"
      className="grid grid-cols-5 gap-2 rounded-2xl border bg-card p-3 shadow-xl"
    >
      {POKEBALLS.map((id) => (
        <button
          key={id}
          type="button"
          role="option"
          aria-selected={value === id}
          title={id}
          onClick={() => onChange(id)}
          className={cn(
            "rounded-lg p-1 transition-colors hover:bg-accent/20",
            value === id && "bg-accent/30 ring-2 ring-accent"
          )}
        >
          <Pokeball id={id} size={32} />
        </button>
      ))}
    </div>
  );
}