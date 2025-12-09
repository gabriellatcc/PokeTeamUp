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

    /**
    * Performs a partial search by Pokémon name, filtering out special forms.
    * This method downloads the complete list of names to allow searching by
    * parts of the string (e.g., "pi" finds "Pikachu"). It also filters IDs
    * above 10,000 to ignore variants (Mega, Gmax, etc.).
    *
    * @param string $search The term to be searched.
    * @param int $limit Limit of results returned (default: 9).
    * @return array<PokeApiResponse> An array containing the detailed data of the Pokémon found.
    */
    public function searchPokemonsPartial(string $search, int $limit = 9): array {
        $search = strtolower(trim($search));

        $url = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
        $response = Http::get($url);

        if ($response->failed()) {
            return [];
        }

        $allPokemons = $response->object()->results;

        $matchedPokemons = array_filter($allPokemons, function($pokemon) use ($search) {
            //checks if the name exists
            if (stripos($pokemon->name, $search) === false) {
                return false;
            }

            //extracts the ID from the URL ( "https://pokeapi.co/api/v2/pokemon/25/") to ignore variations and get only the URL path to avoid problems with http/https
            $path = parse_url($pokemon->url, PHP_URL_PATH); 
            //break the bars and take the last piece (the number)
            $segments = explode('/', rtrim($path, '/'));
            $id = (int) end($segments);

            // if id is <10000, its a original pokemon, more than it is a variation
            return $id < 10000;
        });

        //manual pagination (array cutting)
        $matchedPokemons = array_slice($matchedPokemons, 0, $limit);

        //search the details of the pokemons matched
        $detailedPokemons = [];
        foreach ($matchedPokemons as $pokemonSummary) {
            try {
                $detailedPokemons[] = $this->getPokemonDataFromUrl($pokemonSummary->url);
            } catch (\Exception $e) {
                continue; 
            }
        }

        return $detailedPokemons;
    }
}