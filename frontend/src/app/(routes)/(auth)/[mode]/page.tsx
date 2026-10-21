import { SigninForm } from "@/components/auth/signin-form";
import { SignupForm } from "@/components/auth/signup-form";

const forms = {
  signin: SigninForm,
  signup: SignupForm,
} as const;

export default async function AuthPage({
  params,
}: {
  params: Promise<{ mode: string }>;
}) {
  const { mode } = await params;

  const Form = forms[mode as keyof typeof forms];

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-x-hidden min-h-[calc(100dvh-150px)] py-6">
      <Form />
    </section>
  );
}