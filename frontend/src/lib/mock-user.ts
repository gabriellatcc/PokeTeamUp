export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export const DEMO_USER: User = {
  id: "demo-1",
  name: "Ash Ketchum",
  email: "ash@pokeapp.dev",
  avatar: "beast",
};