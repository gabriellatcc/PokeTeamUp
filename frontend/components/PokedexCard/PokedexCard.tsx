import React from 'react';

export interface PokemonData {
  id: number;
  name: string;
  imgUrl: string;
  types: string[];
}

//type colors
const TYPE_COLORS: { [key: string]: string } = {
  grass: 'bg-green-500',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  normal: 'bg-gray-400',
  poison: 'bg-purple-600',
  bug: 'bg-lime-500',
  fairy: 'bg-pink-400',
  flying: 'bg-indigo-300',
  default: 'bg-gray-400', 
};


const PokedexCard = ({ pokemon }: { pokemon: PokemonData }) => {
  const mainType = pokemon.types?.[0] || 'normal';//defines the main color based on the first type. 
  const typeColor = TYPE_COLORS[mainType.toLowerCase()] || TYPE_COLORS.default;
  
  const formattedId = String(pokemon.id || 0).padStart(3, '0'); //format the id to have 3 digit 
  
  const safeName = pokemon.name || '???';//in case not safe format or not found
  const placeholderText = safeName.slice(0, 3);


  return (
    //ALL THE CARD HERE
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] overflow-hidden cursor-pointer">
      
      {/* POKEMON IMG DIV*/}
      <div className={`w-full h-32 flex items-center justify-center p-4 ${typeColor} bg-opacity-80`}>
        {/*IMG WITH FALLBACK (CASE NOT FOUND*/}
        <img 
          src={pokemon.imgUrl || `https://placehold.co/100x100/${typeColor.replace('bg-', '')}/ffffff?text=${placeholderText}`} 
          alt={pokemon.name} 
          className="w-full h-full object-contain drop-shadow-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src = `https://placehold.co/100x100/${typeColor.replace('bg-', '')}/ffffff?text=Falha`;
          }}
        />
      </div>

      {/* CARD DETALIS DIV LIKE ID NAME AND TYPE(S) */}
      <div className="p-4 text-center">
        <span className="text-xs font-semibold text-gray-500">#{formattedId}</span>
        <h3 className="text-xl font-bold capitalize text-gray-900 mt-1 mb-2">
          {safeName || 'Unknown'}
        </h3>
        
        {/* TYPE*/}
        <div className="flex justify-center flex-wrap gap-2">
            {pokemon.types && pokemon.types.length > 0 ? (
                pokemon.types.map((type, index) => {
                    const typeStyle = TYPE_COLORS[type.toLowerCase()] || TYPE_COLORS.default;
                    return (
                        <div 
                            key={index}
                            className={`px-3 py-1 text-xs font-semibold text-white rounded-full capitalize shadow-md ${typeStyle}`}
                        >
                            {type}
                        </div>
                    );
                })
            ) : (
                <div className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${TYPE_COLORS.default}`}>
                    Unknown type
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default PokedexCard;