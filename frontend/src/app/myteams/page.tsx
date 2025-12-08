'use client';

import React from 'react';

const BACKGROUND_IMAGE_URL = 'https://placehold.co/1920x1080/0d2c3e/ffffff?text=PokeTeam+Background';

export default function MyteamsScreen() {
  return (
<section className="relative w-full h-full flex flex-col items-center justify-start bg-black overflow-x-hidden">        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                
        {/* BACKGROUND IMAGE*/}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
                src={BACKGROUND_IMAGE_URL} 
                alt="Background" 
                className="w-full h-full object-cover" 
            />
        </div>
        <div className="absolute inset-0 bg-black/35 z-[1]" />
        
        {/* SECTION ABOVE IMAGE */}
        <div className="relative w-full h-185">
            <img
                src="/images/myteams-bg.jpg"
                alt="Background de Pokémon"
                className="absolute inset-0 h-full w-full object-cover z-0"
            />
            <div className="relative z-[2] w-full max-w-7xl mx-auto pt-24 pb-4 md:pt-40 md:pb-8 text-center px-4">
               waiting for implementation
            </div>
        </div>
    </section>
  );
}