"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export function DemoLoginButton() {
  const { loginAsDemo } = useAuth();
  const router = useRouter();

  return (
    <Button
      variant="outline"
      onClick={() => {
        loginAsDemo();
        router.push("/settings");
      }}
    >
      Sign in as Demo User
    </Button>
  );
}