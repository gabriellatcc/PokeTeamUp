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
};

export const TECH_STACK = [
    {
      version: 'v15',
      title: 'Next.js',
      description: 'App Router was used for hybrid rendering and SEO optimization. Midleware for access control via Edge.',
      iconClass: SiNextdotjs,
      iconColorClass: 'foreground'
    },
    {
      version: 'v13',
      title: 'React Query',
      description: 'A robust architecture combining the performance of Server-Side Rendering with the security of a consolidated API.',
      iconClass: IoCloudDone,
      iconColorClass: 'muted-foreground'
    },
    {
      version: '',
      title: 'Tailwind + Shadcn/ui',
      description: 'Component-based interface that is accessible and responsive. Consistent design system focused on user experience.',
      iconClass: RiTailwindCssFill,
      iconColorClass: 'secondary'
    },
    {
      version: '',
      title: 'TypeScript',
      description: 'Strong typing for reliable, maintainable, and scalable application development.',
      iconClass: BiLogoTypescript,
      iconColorClass: 'var(--chart-2)'
    },
    {
      version: 'v12',
      title: 'Laravel Sanctum',
      description: 'A lightweight authentication system for SPAs (Single Page Applications) and mobile applications.',
      iconClass: IoLockClosed,
      iconColorClass: 'destructive'
    },
    {
      version: 'v12',
      title: 'Laravel',
      description: 'A robust RESTful API serving as a source of truth. It manages complex business rules and data persistence.',
      iconClass: FaLaravel,
      iconColorClass: 'primary'
    },
];