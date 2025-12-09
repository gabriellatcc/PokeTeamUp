'use client';

import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

import TeamCard, { TeamData } from '@/components/TeamCard/TeamCard';
import TeamDetailsPanel from '@/components/TeamDetailsPanel/TeamDetailsPanel';

import PokemonSelectorPanel from '@/components/PokemonSelectorPanel/PokemonSelectorPanel'; 
import { PokemonData } from '@/components/PokedexCard/PokedexCard';

const BACKGROUND_IMAGE_URL = 'https://placehold.co/1920x1080/0d2c3e/ffffff?text=PokeTeam+Background';

export default function MyteamsScreen() {
    const [teams, setTeams] = useState<TeamData[]>([]);

    const [rightPanelMode, setRightPanelMode] = useState<'details' | 'selector'>('details');
    const [editingContext, setEditingContext] = useState<{ teamId: string, slotIndex: number } | null>(null);

    const handleCreateTeam = () => {
        const newTeam: TeamData = {
            id: `team-${Date.now()}`,
            name: `Team ${teams.length + 1}`,
            pokemons: [] 
        };
        setTeams([...teams, newTeam]);
    };

    // updates the name
    const handleUpdateTeamName = (teamId: string, newName: string) => {
        setTeams(prevTeams => prevTeams.map(team => {
            //if the team is found by ID, update the name
            if (team.id === teamId) {
                return { ...team, name: newName };
            }
            return team;
        }));
    };
    //opens the pokemon selector
    const handleOpenSelector = (teamId: string, slotIndex: number) => {
        setEditingContext({ teamId, slotIndex });
        setRightPanelMode('selector');
    };

    //handles the pokemon selection
    const handleSelectPokemon = (pokemon: PokemonData) => {
        if (editingContext) {
            setTeams(prevTeams => prevTeams.map(team => {
                if (team.id === editingContext.teamId) {
                    const newPokemons = [...team.pokemons];
                    while (newPokemons.length <= editingContext.slotIndex) {
                        newPokemons.push(null);
                    }
                    newPokemons[editingContext.slotIndex] = {
                        id: pokemon.id,
                        name: pokemon.name,
                        image: pokemon.imgUrl, 
                        types: pokemon.types
                    };
                    return { ...team, pokemons: newPokemons };
                }
                return team;
            }));
        }
        setRightPanelMode('details');
        setEditingContext(null);
    };
    //
    const handleCancelSelection = () => {
        setRightPanelMode('details');
        setEditingContext(null);
    };

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const items = Array.from(teams);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTeams(items);
    };

    const handleDeleteTeam = (id: string) => {
        setTeams(teams.filter(t => t.id !== id));
    };

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-start bg-black overflow-hidden">        
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #4f5175; border-radius: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #6d28d9; }
            `}</style>
                    
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img src={BACKGROUND_IMAGE_URL} alt="Background" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-black/35 z-[1]" />
            
            <div className="relative w-full h-full flex flex-col"> 
                <img src="/images/myteams-bg.jpg" alt="Background" className="absolute inset-0 h-full w-full object-cover z-0" />
                
                <div className="relative z-[2] w-full max-w-7xl mx-auto pt-8 pb-4 px-4 h-full flex flex-col">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full pb-8">
                        
                        <div className="lg:col-span-2 flex flex-col h-full overflow-hidden">
                            <div className="relative w-full mb-6 flex-shrink-0">
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black z-10">
                                    <Search className="w-6 h-6" />
                                </div>
                                <Input type="text" placeholder="Search team..." className="h-12 pl-12 w-full text-lg rounded-full shadow-lg border-2 border-transparent focus-visible:ring-0 focus-visible:border-blue-500 bg-[#f2f2f2] text-black" />
                            </div>

                            {teams.length === 0 ? (
                                <div className="w-full h-[65vh] flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-xl bg-black/20">
                                    <p className="text-white text-lg font-medium mb-4 shadow-black drop-shadow-md">No team created yet. Create now!</p>
                                    <button onClick={handleCreateTeam} className="w-full max-w-3xl bg-[#f2f2f2] hover:bg-white h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-[1.01] active:scale-95 group">
                                        <div className="bg-[#1a1b26] rounded-full p-1 group-hover:bg-black transition-colors"><Plus className="w-5 h-5 text-white" /></div>
                                    </button>
                                </div>
                            ) : (
                                <div className="h-[65vh] overflow-y-auto custom-scrollbar border-2 border-dashed border-white/10 rounded-xl bg-black/20 p-4">
                                    <DragDropContext onDragEnd={onDragEnd}>
                                        <Droppable droppableId="teams-list">
                                            {(provided) => (
                                                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                                                    {teams.map((team, index) => (
                                                        <Draggable key={team.id} draggableId={team.id} index={index}>
                                                            {(provided) => (
                                                                <TeamCard 
                                                                    team={team}
                                                                    innerRef={provided.innerRef}
                                                                    draggableProps={provided.draggableProps}
                                                                    dragHandleProps={provided.dragHandleProps}
                                                                    onDelete={() => handleDeleteTeam(team.id)}
                                                                    onEditName={(newName) => handleUpdateTeamName(team.id, newName)}
                                                                    onAddPokemon={(slotIndex) => handleOpenSelector(team.id, slotIndex)} 
                                                                />
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </DragDropContext>
                                    <button onClick={handleCreateTeam} className="w-full mt-4 h-14 bg-[#f2f2f2] hover:bg-white rounded-full flex flex-col items-center justify-center shadow-xl transition-transform hover:scale-[1.01] active:scale-95 group">
                                        <div className="bg-[#1a1b26] rounded-full p-1 group-hover:bg-black transition-colors"><Plus className="w-5 h-5 text-white" /></div>
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="hidden lg:block lg:col-span-1 h-full overflow-hidden">
                            {rightPanelMode === 'selector' ? (
                                <PokemonSelectorPanel 
                                    onSelect={handleSelectPokemon} 
                                    onCancel={handleCancelSelection}
                                />
                            ) : (
                                <TeamDetailsPanel />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}