'use client';

import React from 'react';

import { Separator } from "@/components/ui/separator"; 

import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";

import { IoCloudDone, IoLockClosed } from "react-icons/io5";

import { Pixelify_Sans } from 'next/font/google';
const pixelFont = Pixelify_Sans({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

// data and colors
const techStack = [
    {version: 'v15', title: 'Next.js', description: 'App Router was used for hybrid rendering and SEO optimization. Midleware for access control via Edge.',
        iconClass: 'nextjs-logo',
        hoverBorderClass: 'hover:border-white', 
        iconColorClass: 'text-white' 
    },
    {version: 'v13', title: 'React Query', description: 'A robust architecture combining the performance of Server-Side Rendering with the security of a consolidated API.',
        iconClass: 'react-query-icon',
        hoverBorderClass: 'hover:border-sky-500',
        iconColorClass: 'text-sky-500'
    },
    {version: '', title: 'Laravel Sanctum', description: 'A lightweight authentication system for SPAs (Single Page Applications) and mobile applications.',
        iconClass: 'laravel-sanctum-icon',
        hoverBorderClass: 'hover:border-gray-500',
        iconColorClass: 'text-gray-500'
    },
    {version: 'v12', title: 'Laravel', description: 'A robust RESTful API serving as a source of truth. It manages complex business rules and data persistence.',
        iconClass: 'fa-brands fa-laravel',
        hoverBorderClass: 'hover:border-red-500',
        iconColorClass: 'text-red-500'
    },
    { version: '', title: 'Tailwind + Shadcn/ui', description: 'Component-based interface that is accessible and responsive. Consistent design system focused on user experience.',
        iconClass: 'tailwindcss-logo',
        hoverBorderClass: 'hover:border-cyan-400',
        iconColorClass: 'text-cyan-400'
    },
    { version: '', title: 'TypeScript', description: 'Strong typing for reliable, maintainable, and scalable application development.',
        iconClass: 'typescript-logo',
        hoverBorderClass: 'hover:border-blue-500',
        iconColorClass: 'text-blue-500'
    },
];

interface TechCardProps {
    title: string;
    version: string;
    description: string;
    iconClass: string;
    hoverBorderClass: string;
    iconColorClass: string;
}

const TechCard: React.FC<TechCardProps> = ({ 
    title, 
    version, 
    description, 
    iconClass,
    hoverBorderClass,
    iconColorClass,
}) => {

    const iconBaseClasses = "text-4xl mr-4";

    const renderIcon = () => {

        // blend base classes with color dinamic classes
        const finalIconClasses = `${iconBaseClasses} ${iconColorClass}`;

        if (title === 'Next.js') return <SiNextdotjs className={finalIconClasses} />;
        if (title === 'TypeScript') return <BiLogoTypescript className={finalIconClasses} />;
        if (title === 'Tailwind + Shadcn/ui') return <RiTailwindCssFill className={finalIconClasses} />;
        if (title === 'Laravel') return <FaLaravel className={finalIconClasses} />;
        if (title === 'React Query') return <IoCloudDone className={finalIconClasses} />;
        if (title === 'Laravel Sanctum') return <IoLockClosed className={finalIconClasses} />;

        return <i className={`${iconClass} ${finalIconClasses}`}></i>;
    };

    return (
        /** CARD DIV */
        <div 
            className={`p-6 border border-neutral-700 rounded-xl bg-neutral-800 ${hoverBorderClass} transition-all duration-300`}
        >
            <div className="flex items-center mb-4">
                {renderIcon()}

                <h3 className="text-2xl font-bold text-white">
                    {title}
                    {version && <span className="ml-2 text-sm font-medium text-neutral-400">{version}</span>}
                </h3>
            </div>
            <p className="text-neutral-300">
                {description}
            </p>
        </div>
    );
};

export const FullStackOverviewSection: React.FC = () => {
    return (
        <section className="relative z-[2] w-full bg-black py-16 md:py-10 px-4">
               
            {/* TITLES AND ALL CARD ARE IN THIS DIV*/}
            <div className="max-w-7xl mx-auto">
                {/* TITLE 1 DIV*/}
                <div className="flex items-center justify-center space-x-4 mb-10">
                    <span className="text-sm font-semibold text-[#76E39E] whitespace-nowrap tracking-widest">
                        TECHNICAL SPECIFICATIONS
                    </span>
                </div>
                {/* TITLE 2*/}
                <h2 className={`${pixelFont.className} text-center text-4xl md:text-5xl pb- 4font-extrabold text-white mb-6 md:mb-8 max-w-4xl mx-auto leading-snug `}>
                    FULL STACK OVERVIEW
                </h2>
                <div className="relative z-[2] w-full max-w-7xl mx-auto pt-6 pb-4 md:pt-2 md:pb-8 text-center px-4">
                    <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto mb-8">
                        Explore the Pokédex, view detailed stats, and build the ultimate team. Star your favorite Pokémon to keep them just a click away.
                    </p>
                </div>
                {/* GRID DIV FOR CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techStack.map((tech, index) => (
                        <TechCard key={index} {...tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FullStackOverviewSection;