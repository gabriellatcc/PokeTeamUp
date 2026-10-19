export const POKEBALLS = [
  "poke", "great", "ultra", "master", "premier",
  "safari", "net", "dive", "nest", "repeat",
  "timer", "luxury", "heal", "quick", "dusk",
  "cherish", "level", "lure", "moon", "friend",
  "love", "heavy", "fast", "sport", "park",
] as const;

export const DEFAULT_POKEBALL = "poke";

export const pokeballSrc = (id: string) => `/images/balls/${id}.png`;