import { SigninForm } from "@/components/auth/signin-form";
import { SignupForm } from "@/components/auth/signup-form";
import { LogIn, UserPlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const forms = {
  signin: SigninForm,
  signup: SignupForm,
} as const;

const meta = {
  signin: {
    title: "Sign in",
    description: "Log in to your account to continue.",
    icon: LogIn,
  },
  signup: {
    title: "Sign up",
    description: "Fill in the details to register.",
    icon: UserPlus,
  },
} as const;

export default async function AuthPage({
  params,
}: {
  params: Promise<{ mode: string }>;
}) {
  const { mode } = await params;

  const currentMode = (mode in forms ? mode : "signin") as keyof typeof forms;
  const Form = forms[currentMode];
  const { title, description, icon: Icon } = meta[currentMode];

  return (
    <section className="relative w-full flex flex-col rounded-4xl items-center justify-center overflow-x-hidden min-h-[calc(100dvh-150px)] py-6">
      <Card className="w-full max-w-md rounded-2xl border-foreground/60 bg-card text-card-foreground shadow-md dark:border-ring">
        <CardHeader className="space-y-0 pb-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/15 bg-foreground/10 text-foreground shadow-xs dark:bg-secondary/80 dark:shadow-none">
              <Icon className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <CardTitle className="text-xl font-semibold tracking-tight">
                {title}
              </CardTitle>
              <CardDescription className="text-xs text-card-foreground/80">
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Form />
        </CardContent>
      </Card>
    </section>
  );
}