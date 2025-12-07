import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}

function NavItem({ href, label }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-white font-bold text-lg drop-shadow-sm transition-transform hover:scale-110 hover:text-white/90"
    >
      {label}
    </Link>
  );
}

export function NavigationBar() {
  return (
    <div className="flex items-center gap-8 z-10">
      <NavItem href="/home" label="Home" />
      <NavItem href="/pokedex" label="Pokédex" />
      <NavItem href="/myteams" label="My Teams" />
    </div>
  );
}