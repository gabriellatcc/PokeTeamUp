import { SigninForm } from "@/components/auth/signin-form";

export default function LoginScreen() {
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden min-h-screen">
      <SigninForm />
    </section>
  );
}