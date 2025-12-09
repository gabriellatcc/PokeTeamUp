'use client';

import React, { useState, useEffect } from 'react';
import { Search, LoaderCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import PokedexCard, { PokemonData } from '@/components/PokedexCard/PokedexCard';

const API_URL = 'http://localhost:8000/api/pokemons';
const ITEMS_PER_PAGE = 18;

interface PokemonSelectorPanelProps {
  onSelect: (pokemon: PokemonData) => void;
  onCancel: () => void;
}

interface ApiResponse {
    data: PokemonData[];
    limit: number;
    page: number;
}

const PokemonSelectorPanel: React.FC<PokemonSelectorPanelProps> = ({ onSelect, onCancel }) => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemons = async (pageNumber: number, search: string = '') => {
    setIsLoading(true);
    setError(null);
    try {
      const searchParam = search ? `&name=${search}` : '';
      const response = await fetch(`${API_URL}?page=${pageNumber}&limit=${ITEMS_PER_PAGE}${searchParam}`);
      
      if (!response.ok) throw new Error('Failed to load.');
      const result: ApiResponse = await response.json();
      setPokemons(result.data);
      setPage(result.page);
    } catch (err: any) {
      setError('Error loading data.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchPokemons(page, searchTerm);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [page, searchTerm]);

  return (
    <div className="w-full h-[75vh] bg-[#1a1b26]/95 border-[4px] border-[#133a78] rounded-xl flex flex-col relative shadow-2xl overflow-hidden">
      
      {/* painel header with title */}
      <div className="p-4 bg-[#0f111a] border-b border-[#4f5175] flex justify-between items-center">
        <h2 className="text-white text-lg font-bold">Select Pokémon</h2>
        <button onClick={onCancel} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
        </button>
      </div>

      {/* Barra de Busca */}
      <div className="p-4 bg-[#1a1b26]">
        <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setPage(1);
                }}
                className="h-10 pl-9 rounded-full bg-[#0f111a] border-gray-700 text-white focus-visible:ring-blue-500"
            />
        </div>
      </div>

      {/* pokemon list*/}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {isLoading ? (
              <div className="h-full flex flex-col items-center justify-center text-white/50">
                  <LoaderCircle className="w-8 h-8 animate-spin mb-2" />
                  <span className="text-sm">Loading...</span>
              </div>
          ) : error ? (
              <div className="h-full flex items-center justify-center text-red-400 text-sm text-center">
                  {error}
              </div>
          ) : pokemons.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-500 text-sm">
                  No Pokémon found.
              </div>
          ) : (
            //grid to show 18 per page
              <div className="grid grid-cols-3 grid-rows-6 gap-3">
                  {pokemons.map((pokemon) => (
                      <div 
                          key={pokemon.id} 
                          onClick={() => onSelect(pokemon)}
                          className="cursor-pointer hover:scale-[1.02] transition-transform"
                      >
                          <div className="bg-white rounded-lg p-2 flex flex-col items-center shadow-sm">
                              <img src={pokemon.imgUrl} alt={pokemon.name} className="w-16 h-16 object-contain" />
                              <span className="text-[10px] font-bold mt-1 text-gray-800 capitalize">{pokemon.name}</span>
                          </div>
                      </div>
                  ))}
              </div>
          )}
      </div>

      {/* Paging */}
      <div className="p-3 bg-[#0f111a] border-t border-[#4f5175] flex justify-between items-center text-xs">
          <button 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1 || isLoading}
              className="p-1.5 bg-blue-600 rounded hover:bg-blue-500 disabled:opacity-50 text-white"
          >
              <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-white font-medium">Page {page}</span>
          <button 
              onClick={() => setPage(p => p + 1)}
              disabled={pokemons.length < ITEMS_PER_PAGE || isLoading}
              className="p-1.5 bg-blue-600 rounded hover:bg-blue-500 disabled:opacity-50 text-white"
          >
              <ChevronRight className="w-4 h-4" />
          </button>
      </div>
    </div>
  );
};

export default PokemonSelectorPanel;