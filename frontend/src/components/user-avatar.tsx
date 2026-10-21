import Image from "next/image";
import { pokeballSrc } from "@/lib/pokeballs";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  avatar?: string;
  size?: number;
  className?: string;
}

export function UserAvatar({ avatar, size = 32, className }: UserAvatarProps) {
  if (!avatar) {
    return <i className="fa-solid fa-user text-foreground" style={{ fontSize: size }} />;
  }

  return (
    <Image
      src={pokeballSrc(avatar)}
      alt={`${avatar} ball`}
      width={size}
      height={size}
      unoptimized
      className={cn("[image-rendering:pixelated]", className)}
    />
  );
}