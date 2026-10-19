"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { ROUTE_BACKGROUNDS, DEFAULT_BACKGROUND } from "../../lib/site-content";

export function PageBackground() {
  const pathname = usePathname();
  const src =
    Object.entries(ROUTE_BACKGROUNDS).find(([route]) =>
      pathname.startsWith(route)
    )?.[1] ?? DEFAULT_BACKGROUND;

  return (
    <Image
      src={src}
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover z-0"
    />
  );
}