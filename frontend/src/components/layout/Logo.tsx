import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="block">
      <Image
        src="/images/logo.png"
        alt="Logo PokeTeam UP"
        width={500}
        height={80}
        className="h-16 w-auto object-contain hover:scale-105 transition-transform"
        priority
      />
    </Link>
  );
}