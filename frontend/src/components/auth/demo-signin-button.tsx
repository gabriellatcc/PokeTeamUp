"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/pixelact-ui/button";
import { useAuth } from "@/hooks/useAuth"; // ou useAuthContext se for o mesmo hook
import { DEMO_USER } from "@/lib/mock-user";

export function DemoLoginButton() {
  const { user, isLoggedIn, loginAsDemo } = useAuth();
  const router = useRouter();

  const isDemoLogged = isLoggedIn && user?.id === DEMO_USER.id;

  return (
    <Button
      variant={isDemoLogged ? "default" : "default"}
      disabled={isDemoLogged}
      onClick={() => {
        loginAsDemo();
        router.push("/settings");
      }}
    >
      {isDemoLogged ? "Logged in as Demo User" : "Try as Demo User"}
    </Button>
  );
}