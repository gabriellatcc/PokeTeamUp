'use client';

import React, { useState, useEffect } from 'react';

import { ChevronLeft, ChevronRight, LoaderCircle } from 'lucide-react';
import PokedexCard, { PokemonData } from '@/components/PokedexCard/PokedexCard';
import { Input } from '@/components/ui/input'; 

import { Pixelify_Sans } from 'next/font/google';
const pixelFont = Pixelify_Sans({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

import { Press_Start_2P } from 'next/font/google';

const pixelFont2 = Press_Start_2P({
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

interface ApiResponse {
    data: PokemonData[];
    limit: number;
    page: number;
}

const BACKGROUND_IMAGE_URL = 'https://placehold.co/1920x1080/0d2c3e/ffffff?text=PokeTeam+Background';
const ITEMS_PER_PAGE = 20; 
const API_URL = 'http://localhost:8000/api/pokemons';

const PokedexScreen = () => {
    const [pokemons, setPokemons] = useState<PokemonData[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState(true);

    const fetchPokemons = async (pageNumber: number) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_URL}?page=${pageNumber}&limit=${ITEMS_PER_PAGE}`);
            
            if (!response.ok) {
                throw new Error('Failed to retrieve Pokémon data.');
            }
            const result: ApiResponse = await response.json();
            
            setHasMore(result.data.length === ITEMS_PER_PAGE);
            
            //adds a unique key to avoid re-rendering issues, used internally by React(kept for typing purposes).
            const uniquePokemons = result.data.map((p, index) => ({
                ...p,
                uniqueKey: `${p.id}-${index}` 
            }));

            setPokemons(uniquePokemons);
            setPage(result.page);

        } catch (err: any) {
            console.error("Fetch error:", err);
            setError(err.message);
            setPokemons([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons(page);
    }, [page]);

    const handleNextPage = () => {
        if (hasMore) {
            setPage(prev => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(prev => prev - 1);
        }
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start bg-gray-900 overflow-x-hidden">
            {/* BACKGROUND IMAGE*/}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                    src={BACKGROUND_IMAGE_URL} 
                    alt="Background" 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className="absolute inset-0 bg-[#79caf9]/20 z-[1]" />

            {/* SECTION ABOVE IMAGE */}
            <div className="relative w-full h-full">
                <img
                    src="/images/pokedex-bg.jpg"
                    alt="Background de Pokémon"
                    className="absolute inset-0 h-full w-full object-cover z-0"
                />
                <div className="relative z-[2] w-full max-w-7xl mx-auto pt-24 pb-4 md:pt-15 md:pb-8 text-center px-4">
                   
                    
                    <div className="flex justify-start">
                        <Input  
                            type="searchbar"
                            placeholder="Search any pokemon by name or number"  
                            className="h-12 w-full max-w-sm text-left text-lg rounded-md shadow-sm border-white/0 focus-visible:ring-[#f2f2f2] bg-[#f2f2f2]"
                        />
                    </div>
                </div>
                
                {/* CARDS GRID + BTNS DIV */}
                <div className="relative z-10 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 -mt-10">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl min-h-[400px]">

                        {/* comportaments */}
                        {isLoading && (
                            <div className="text-center p-8 text-white text-xl flex flex-col items-center justify-center h-full">
                                <LoaderCircle className="w-8 h-8 animate-spin mr-2 text-yellow-400" />
                                <span className="mt-2">Looking for Pokémons...</span>
                            </div>
                        )}
                        
                        {error && (
                            <div className="text-center p-8 text-red-400 text-xl">
                                There was an error reloading data: {error}. CHECK IF ({API_URL}) is running.
                            </div>
                        )}

                        {!isLoading && !error && pokemons.length === 0 && (
                            <div className="text-center p-8 text-gray-400 text-xl">
                                None Pokémon found.
                            </div>
                        )}
                        
                        {!isLoading && !error && pokemons.length > 0 && (
                            // creates the div of 5 elements per line
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5">
                                {pokemons.map((pokemon, index) => (
                                    <PokedexCard key={`${pokemon.id}-${index}`} pokemon={pokemon} /> 
                                ))}
                            </div>
                        )}
                    </div>

                    {/* PAGE CONTROL DIV */}
                    <div className="flex justify-center items-center space-x-4 mt-10 p-4 bg">
                        <button
                            onClick={handlePreviousPage}
                            disabled={page === 1}
                            className="p-3 bg-blue-600 text-white rounded-lg shadow-md disabled:opacity-30 hover:bg-blue-500 transition duration-150 flex items-center font-semibold"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                        </button>
                        <span className={`${pixelFont2.className} text-2xl font-extrabold text-[#f2f2f2] px-4 py-2 bg-gray-800 rounded-full shadow-lg`}>
                            {page}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={!hasMore} 
                            className="p-3 bg-red-600 text-white rounded-lg shadow-md disabled:opacity-30 hover:bg-red-500 transition duration-150 flex items-center font-semibold"
                        >
                            <ChevronRight className="w-5 h-5 ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PokedexScreen;