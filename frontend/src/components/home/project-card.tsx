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
    <Card className="relative max-w-7xl mx-auto gap-3 overflow-hidden rounded-2xl border border-slate-100 bg-card py-6 shadow-xl transition-all hover:shadow-2xl">
      {/* detalhe vermelho da pokébola */}
      <div
        className="absolute inset-y-0 left-0 w-2 bg-background"
        aria-hidden="true"
      />

      <CardHeader className="px-6 text-center sm:px-10">
        <CardTitle
          className={`${pixelFont.className} text-xl font-bold uppercase tracking-widest text-slate-900 sm:text-2xl`}
        >
          PROJECT INFO
        </CardTitle>
      </CardHeader>

      <CardContent className="px-6 text-center sm:px-10">
        <p className="mx-auto text-sm leading-relaxed text-slate-600 sm:text-base">
          PokeTeam Up is a modern web app powered by Next.js and Laravel,
          showcasing robust integration with complex RESTful APIs. By
          transforming raw data and dynamically processing images, it delivers a
          fluid user experience that redefines how fans explore the Pokédex.
        </p>
      </CardContent>
    </Card>
  );
};