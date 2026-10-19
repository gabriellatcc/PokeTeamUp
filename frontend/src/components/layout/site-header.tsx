"use client";
// controle de navegação e menu do usuário no header do site
import { usePathname } from "next/navigation";

//componente inutil da barra de navegação, tem que trocar para buttons e links, 
// e não usar a tag <a> para navegação interna, pois isso recarrega a página inteira.
import { NavigationBar } from "../../components/layout/NavigationBar";

//logica apra logado s/n e trocar nome de usuario e botrao de logout para botoes de sign in e sign up
import { UserMenu } from "../settings/avatar-dropdown";

import { Logo } from "../../components/layout/Logo";

// controle de autenticação e logout
import { useUser, useLogout } from "@/hooks/useAuth";

export default function Header() {
  const pathname = usePathname();
  
  const { data: user, isLoading } = useUser();
  const { mutate: logout } = useLogout();

  const isLoggedIn = !!user; 

  const handleLogout = () => {
      logout();
  };

  const bluePages = ["/signin", "/signup", "/", "/pokedex"];
  const isBluePage = bluePages.includes(pathname);
  const headerColor = isBluePage ? "bg-CHART-2" : "bg-[#primary]";

  const authPages = ["/signin", "/signup"];
  const isAuthPage = authPages.includes(pathname);

  return (
    <header
      className={`${headerColor} w-full shadow-md transition-colors duration-300 relative z-50 min-h-[96px] py-4 lg:py-0 flex items-center`}
    >
      <nav className="flex flex-wrap justify-between lg:grid lg:grid-cols-3 items-center max-w-7xl mx-auto w-full px-4 sm:px-8 gap-y-2 lg:gap-y-0">
        
        {/* nav menu */}
       <div className="order-3 w-full flex justify-center mt-6 lg:mt-0 lg:order-none lg:w-auto lg:justify-start">
           <NavigationBar currentPath={pathname} isLoggedIn={isLoggedIn} />
        </div>

        {/* logo */}
        <div className="order-1 flex justify-center lg:justify-center">
          <Logo />
        </div>
          <div className="order-2 flex justify-end">
        
        {/* user menu to sign in/sign up */}
          {!isAuthPage && (
              <UserMenu 
                isLoggedIn={isLoggedIn} 
                onLogout={handleLogout}
                userName={user?.name} 
              />
          )}
        </div>

      </nav>
    </header>
  );
}