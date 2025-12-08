import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">{/*allows to click in elements below it*/}
      <Link href="/" className="pointer-events-auto"> {/* reactives the capacibility of clicking in logo */}
        <Image
          src="/images/logo.png"
          alt="Logo PokeTeam UP"
          width={500}
          height={80}
          className="object-contain hover:scale-105 transition-transform"
          priority
        />
      </Link>
    </div>
  );
}