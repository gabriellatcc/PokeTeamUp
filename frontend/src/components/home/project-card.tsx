import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pixelify_Sans } from "next/font/google";

const pixelFont = Pixelify_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export const ProjectCard: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Card className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl border-2 border-foreground/10 border-b-4 border-b-foreground/50 bg-secondary/25 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--shadow-color)]/30 hover:border-b-foreground/50 hover:shadow-md dark:hover:border-foreground/80 dark:hover:shadow-[0_0_5px_-2px_var(--chart-2)]">
          <CardHeader className="px-6 text-center sm:px-10">
            <CardTitle
              className={`${pixelFont.className} text-xl font-bold uppercase tracking-widest text-foreground sm:text-2xl`}
            >
              PROJECT INFO
            </CardTitle>
          </CardHeader>

          <CardContent className="px-6 text-center sm:px-10">
            <p className="mx-auto text-sm leading-relaxed text-foreground sm:text-base">
              PokeTeam Up is a modern web app powered by Next.js and Laravel,
              showcasing robust integration with complex RESTful APIs. By
              transforming raw data and dynamically processing images, it
              delivers a fluid user experience that redefines how fans explore
              the Pokédex.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};