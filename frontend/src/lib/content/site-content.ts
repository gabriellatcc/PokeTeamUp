export const SITE = {
  name: "PokeTeam Up",
  shortName: "PokeTeam Up",
  tagline: "Your ultimate Pokémon team builder",
} as const;

export const CONTACT = {
  emails: ["gabriellatccorrea@gmail.com"],
  linkedin: "https://www.linkedin.com/in/gabriellatccorrea",
  github: "@gabriellatcc"
} as const;

// export function whatsappUrl(message?: string): string {
//   const base = `https://wa.me/55${CONTACT.whatsapp}`;
//   if (!message) return base;
//   return `${base}?text=${encodeURIComponent(message)}`;
// }

export const ABOUT_PROJECT = {
  intro:
    "PokeTeam Up is a modern web app powered by Next.js and Laravel, showcasing robust integration with complex RESTful APIs. By transforming raw data and dynamically processing images, it delivers a fluid user experience that redefines how fans explore the Pokédex."
} as const;

export const CREDITS = {
    developer: "Gabriella Correa",
    apiCredits:"Data provided by PokéAPI and includes material from Pokémon. © 2026 Pokémon.",
    warning: "This is a non-profit project for study and portfolio purposes"
}

export type Generation = {
  slug: string;
  title: string;
  new: number;
  category: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  pokemons: string[];//formatar o que vem da api
};
//https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
export const generations: Generation[] = [
  {
    slug: "generation-1",
    title: "First Generation",
    new: 151,
    category: 1,
    pokemons: [
      //chama api?
    ],
  },
  {
    slug: "generation-2",
    title: "Second Generation",
    new:100,
    category: 2,
    pokemons: [
      //chama api?
    ],
  },
  {
    slug: "generation-3",
    title: "Third Generation",
    new: 135,
    category: 3,
    pokemons: [
      //chama api?
    ],
  },
  {
    slug: "generation-4",
    title: "Fourth Generation",
    new: 107,
    category: 4,
    pokemons: [
      //chama api?
    ],
  },
  {
    slug: "generation-5",
    title: "Fifth Generation",
    new: 156,
    category: 5,
    pokemons: [
      //chama api?
    ],
  },
  {
    slug: "generation-6",
    title: "Sixth Generation",
    new: 72,
    category: 6,
    pokemons: [
      //chama api?
    ],
  },
  {
    slug: "generation-7",
    title: "Seventh Generation",
    new: 88,
    category: 7,
    pokemons: [
      //chama api?
    ],
  },
  {
    slug: "generation-8",
    title: "Eighth Generation",
    new: 96,
    category: 8,
    pokemons: [
      //chama api?
    ],
  },
  {
    slug: "generation-9",
    title: "Ninth Generation",
    new: 112,
    category: 9,
    pokemons: [
      //chama api?
    ],
  },
];

export function isGenerationCategory(value: number): value is Generation["category"] {
  return Number.isInteger(value) && value >= 1 && value <= 9;
}

export function getGenerationBySlug(slug: string): Generation | undefined {
  return generations.find((generation) => generation.slug === slug);
}

export type SiteNavItem = {
  label: string;
  to: "/home" | "/pokedex" | "/myteams" | "/favorites" | "/settings" | "signin" | "signup" | "/pokemon";
};

// src="public/images/"
export const BASE_NAV_ITEMS = [
  { label: "Home", to: "/home" as const },
  { label: "pokedex", to: "/pokedex" as const },
  { label: "My Teams", to: "/myteams" as const },
  { label: "Favorites", to: "/favorites" as const },
  { label: "Settings", to: "/settings" as const },
  { label: "Sign In", to: "signin" as const },
  { label: "Sign Up", to: "signup" as const },
  { label: "Pokemon", to: "/pokemon" as const },
] as const satisfies readonly SiteNavItem[];


export const NAV_ITEMS = BASE_NAV_ITEMS;

export const DEFAULT_BACKGROUND = "/images/home-bg.png";

export const ROUTE_BACKGROUNDS: Record<string, string> = {
  "/home": "/images/home-bg.png",
  "/pokedex": "/images/pokedex.jpg",
  "/myteams": "/images/myteams.jpg",
  "/favorites": "/images/settings.jpg",
  "/settings": "/images/settings.jpg",
  "/signin": "/images/auth.jpg",
  "/signup": "/images/auth.jpg",
};