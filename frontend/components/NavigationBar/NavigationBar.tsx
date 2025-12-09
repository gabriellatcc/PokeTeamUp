import Link from "next/link";

interface NavigationBarProps {
  currentPath: string;
  isLoggedIn?: boolean;
}

export function NavigationBar({ currentPath, isLoggedIn = false }: NavigationBarProps) {
  
  const navItems = [
    { label: "Home", href: "/", public: true },
    { label: "Pokedex", href: "/pokedex", public: true },
    { label: "My teams", href: "/myteams", public: false },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 items-center">
      {navItems.map((item) => {
        //hiden item if logged in
        if (!item.public && !isLoggedIn) return null;

        const isActive = currentPath === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              font-bold text-base lg:text-lg whitespace-nowrap
              transition-all duration-300 ease-in-out transform
              ${isActive 
                ? "text-[#3b4cca] scale-110 lg:scale-125"
                : "text-white hover:text-[#3b4cca] hover:scale-105 lg:hover:scale-110"
              }
            `}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}