import React, { useState, useRef, useEffect } from 'react';
import { Pencil, Trash2, Plus, GripVertical, Check, X } from 'lucide-react';
import { Press_Start_2P } from 'next/font/google';

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export interface PokemonSlot {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export interface TeamData {
  id: string;
  name: string;
  pokemons: (PokemonSlot | null)[];
}

interface TeamCardProps {
  team: TeamData;
  onEditName: (newName: string) => void;
  onDelete: () => void;
  onAddPokemon: (slotIndex: number) => void;
  dragHandleProps?: any;
  draggableProps?: any;
  innerRef?: any;
}

const TeamCard: React.FC<TeamCardProps> = ({ 
  team, 
  onEditName, 
  onDelete, 
  onAddPokemon,
  dragHandleProps,
  draggableProps,
  innerRef
}) => {
  // states to name changing
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(team.name);
  const inputRef = useRef<HTMLInputElement>(null);

  // render aways 5 slotes for the team creation
  const slots = [...team.pokemons];
  while (slots.length < 5) {
    slots.push(null);
  }

  // foucus in input as pencil for edit is clicked
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  // deal with saving
  const handleSave = () => {
    if (tempName.trim()) {
      onEditName(tempName);
      setIsEditing(false);
    } else {
      //not accepting empty returns to original
      setTempName(team.name);
      setIsEditing(false);
    }
  };

  //deal with cancel
  const handleCancel = () => {
    setTempName(team.name);
    setIsEditing(false);
  };

  //deal with save(enter) and cancel(esc)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') handleCancel();
  };

  return (
    <div 
      ref={innerRef}
      {...draggableProps}
      className="relative flex items-center mb-6 group"
    >
      {/* btn to drag team*/}
      <div 
        {...dragHandleProps}
        className="absolute -left-5 z-20 bg-[#3b4cca] h-16 w-8 rounded-l-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-md border-r border-gray-200"
        title="Drag to reorder"
      >
        <GripVertical className="w-5 h-5 text-black" />
      </div>

      {/* main card */}
      <div className="w-full bg-[#151515] min-h-[15rem] rounded-xl p-5 shadow-xl border border-gray-800 relative z-10 ml-2">
        
        {/* card header */}
        <div className="flex justify-between items-center mb-4 h-10">
          <div className="flex items-center gap-3 flex-1 mr-4">
            
            {isEditing ? (
              // input for edit mode
              <div className="flex items-center gap-2 w-full">
                <input 
                  ref={inputRef}
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-[#222] text-white text-xl font-bold px-2 py-1 rounded border border-blue-500 outline-none w-full max-w-[300px]"
                />
                <button onClick={handleSave} className="text-green-500 hover:text-green-400 p-1">
                  <Check className="w-5 h-5" />
                </button>
                <button onClick={handleCancel} className="text-red-500 hover:text-red-400 p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-white text-xl font-bold truncate">{team.name}</h3>
                <button 
                  onClick={() => setIsEditing(true)} 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  title="Editar nome"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              </>
            )}

          </div>
          
          <button 
            onClick={onDelete}
            className="group/delete p-2 hover:bg-red-900/30 rounded-full transition-colors"
          >
            <Trash2 className="w-6 h-6 text-red-600 group-hover/delete:text-red-500" />
          </button>
        </div>

        {/* pokemon grid de slots*/}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {slots.map((pokemon, index) => (
            <div key={index} className="aspect-[3/4] rounded-lg overflow-hidden relative">
              {pokemon ? (
                <div className="w-full h-full bg-white flex flex-col items-center p-2">
                  <div className="flex-1 w-full flex items-center justify-center">
                    <img src={pokemon.image} alt={pokemon.name} className="w-20 h-20 object-contain" />
                  </div>
                  <span className={`${pixelFont.className} text-[10px] uppercase text-black mb-2`}>
                    {pokemon.name}
                  </span>
                  <div className="flex flex-col gap-1 w-full px-1">
                    {pokemon.types.map(t => (
                      <span key={t} className="text-[9px] text-white text-center rounded-full px-2 py-0.5 bg-pink-500 uppercase font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => onAddPokemon(index)}
                  className="w-full h-full bg-[#333333] hover:bg-[#404040] flex items-center justify-center transition-colors group/add"
                >
                  <div className="bg-[#1a1b26] rounded-full p-1 group-hover/add:scale-110 transition-transform">
                     <Plus className="w-6 h-6 text-green-500" />
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;