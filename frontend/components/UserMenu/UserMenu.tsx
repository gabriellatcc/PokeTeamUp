import Link from "next/link";

interface UserMenuProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export function UserMenu({ isLoggedIn, onLogout }: UserMenuProps) {
  return (
    <div className="flex gap-4 items-center justify-end z-10 min-w-[200px]">
      {!isLoggedIn ? (
        <>
          <Link
            href="/signin"
            className="text-white font-medium hover:opacity-80 transition drop-shadow-sm"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 bg-white text-[#D83138] rounded-full font-bold hover:bg-gray-100 transition shadow-sm hover:scale-105 transform"
          >
            Sign up
          </Link>
        </>
      ) : (
        <div className="flex gap-4 items-center">
          <span className="text-white font-medium drop-shadow-sm hidden md:block">
            Hello, Trainer
            </span>
          <button
            onClick={onLogout}
            className="text-white border border-white/50 px-4 py-1 rounded-full hover:bg-white/20 transition drop-shadow-sm"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}