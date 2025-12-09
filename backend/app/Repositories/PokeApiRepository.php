<?php

namespace App\Repositories;

use App\Interfaces\PokeApiInterface;
use App\Models\PokeApiResponse;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class PokeApiRepository implements PokeApiInterface{
    
    public function getPokemonDataById(int $id) : PokeApiResponse{
        return $this->getPokemonDataFromUrl("https://pokeapi.co/api/v2/pokemon/{$id}");
    }
    public function getPokemonDataByName(string $name) : PokeApiResponse
    {
        return $this->getPokemonDataFromUrl("https://pokeapi.co/api/v2/pokemon/{$name}");
    }
    
    public static function getPokemonImgUrl(int $id):string{
        $id = sprintf("%'03d", $id);
        return "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{$id}.png";
    }

    /**
     * @param int $limit number of pokemon per page.
     * @param int $offset whre to search for.
     * @return array<PokeApiResponse>
     */
    public function getPokemonsData(int $limit, int $offset) : array {
        $url = "https://pokeapi.co/api/v2/pokemon?limit={$limit}&offset={$offset}";
        
        Log::info("[PokeAPI] Searching for the list of Pokémon. URL: {$url}"); 

        $response = Http::timeout(5)->get($url);

        if ($response->failed()) {
            Log::error("[PokeAPI] Failed to retrieve list. Status: " . $response->status() . " URL: " . $url);
            throw new \Exception("Failed to communicate with PokeAPI: " . $response->status());
        }

        $result = $response->object();

        $pokemons = [];
        if (!empty($result->results)) {
            Log::info("[PokeAPI] List of results received with " . count($result->results) . " items.");
            foreach ($result->results as $pokemonSummary) {
                $pokemonData = $this->getPokemonDataFromUrl($pokemonSummary->url);
                $pokemons[] = $pokemonData;
            }
        } else {
            Log::warning("[PokeAPI] Empty results list, but successful HTTP request.");
        }

        return $pokemons;
    }
    
    /**
     * @param string $url from specific pokemon.
     * @return PokeApiResponse
     */
    public function getPokemonDataFromUrl(string $url) : PokeApiResponse{
        $response = Http::timeout(5)->get($url); 
        
        if ($response->failed()) {
            Log::error("[PokeAPI] Failure to retrieve details. Status: " . $response->status() . " URL: " . $url);
            throw new \Exception("Failed to retrieve detailed Pokémon data: " . $url);
        }

        $data = $response->object();
        
        $id = $data->id ?? 0;
        $name = $data->name ?? 'unknown';
        
        $types = [];
        if (!empty($data->types)) {
            foreach ($data->types as $typeData) {
                $types[] = $typeData->type->name; 
            }
        } else {
            $types[] = 'normal'; 
        }

        $imgUrl = $this->getPokemonImgUrl($id); 
        
        $pokemonData = new PokeApiResponse($id, $name, $imgUrl, $types); 
        
        Log::debug("[PokeAPI] Created Pokémon data: " . $name . " (ID: " . $id . ") Types: " . implode(', ', $types));
        
        return $pokemonData;
    }
}