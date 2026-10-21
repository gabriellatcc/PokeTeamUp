import type { IconType } from "react-icons";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { MdToken } from "react-icons/md";

export type StackItem = {
  version: string;
  title: string;
  description: string;
  iconClass: IconType;
  iconColorClass: string;
  specificDetail?:  [string, boolean];
};

export const TECH_STACK = [
    {
      version: 'v15',
      title: 'Next.js',
      description: 'App Router was used for hybrid rendering and SEO optimization. Midleware for access control via Edge.',
      iconClass: SiNextdotjs,
      iconColorClass: 'var(--foreground)',
      specificDetail: ['Frontend Framework', true]
    },
    {
      version: 'v5',
      title: 'React Query',
      description: 'A robust architecture combining the performance of Server-Side Rendering with the security of a consolidated API.',
      iconClass: SiReactquery,
      iconColorClass: 'var(--accent)',
      specificDetail: ['Data Fetching & State Management', true]
    },
    {
      version: 'v4',
      title: 'Tailwind + Shadcn/ui',
      description: 'Component-based interface that is accessible and responsive. Consistent design system focused on user experience.',
      iconClass: RiTailwindCssFill,
      iconColorClass: 'var(--ring)',
      specificDetail: ['Styling Library', true]
    },
    {
      version: 'v5',
      title: 'TypeScript',
      description: 'Strong typing for reliable, maintainable, and scalable application development.',
      iconClass: SiTypescript,
      iconColorClass: 'color-mix(in srgb, var(--chart-2) 70%, black)',
      specificDetail: ['Programming Language', true]
    },
    {
      version: 'v11',
      title: 'Laravel Sanctum',
      description: 'A lightweight authentication system for SPAs (Single Page Applications) and mobile applications.',
      iconClass: MdToken,
      iconColorClass: 'var(--destructive)',
      specificDetail: ['Authentication System', false]
    },
    {
      version: 'v12',
      title: 'Laravel',
      description: 'A robust RESTful API serving as a source of truth. It manages complex business rules and data persistence.',
      iconClass: FaLaravel,
      iconColorClass: 'var(--destructive)',
      specificDetail: ['Backend Framework', false]
    },
];