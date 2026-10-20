import type { IconType } from "react-icons";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { IoCloudDone, IoLockClosed } from "react-icons/io5";

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
      iconClass: IoCloudDone,
      iconColorClass: 'var(--muted-foreground)',
      specificDetail: ['Data Fetching & State Management', true]
    },
    {
      version: 'v4',
      title: 'Tailwind + Shadcn/ui',
      description: 'Component-based interface that is accessible and responsive. Consistent design system focused on user experience.',
      iconClass: RiTailwindCssFill,
      iconColorClass: 'var(--secondary)',
      specificDetail: ['Styling Library', true]
    },
    {
      version: 'v5',
      title: 'TypeScript',
      description: 'Strong typing for reliable, maintainable, and scalable application development.',
      iconClass: BiLogoTypescript,
      iconColorClass: 'var(--chart-2)',
      specificDetail: ['Programming Language', true]
    },
    {
      version: 'v11',
      title: 'Laravel Sanctum',
      description: 'A lightweight authentication system for SPAs (Single Page Applications) and mobile applications.',
      iconClass: IoLockClosed,
      iconColorClass: 'var(--destructive)',
      specificDetail: ['Authentication System', false]
    },
    {
      version: 'v12',
      title: 'Laravel',
      description: 'A robust RESTful API serving as a source of truth. It manages complex business rules and data persistence.',
      iconClass: FaLaravel,
      iconColorClass: 'var(--primary)',
      specificDetail: ['Backend Framework', false]
    },
];