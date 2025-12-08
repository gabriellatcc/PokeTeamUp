<?php

namespace App\Repositories;

use App\Interfaces\pokeApiInterface;
use App\Models\PokeApiResponse;
use App\Models\Pokemon;

class PokeApiRepository implements pokeApiInterface{
    
    public function getPokemonDataById(int $id) : PokeApiResponse{
        return $this->getPokemonDataFromUrl("https://pokeapi.co/api/v2/pokemon/{$id}");
    }
    public function getPokemonDataByName(string $name) : PokeApiResponse
    {
        return $this->getPokemonDataFromUrl("https://pokeapi.co/api/v2/pokemon/{$name}");
    }
    public function getPokemonsData(int $limit){
        $data = file_get_contents("https://pokeapi.co/api/v2/pokemon?limit={limit}");
        return json_decode($data);
    }
    public static function getPokemonImgUrl(int $id):string{
        $id = sprintf("%'03d", $id);
        return "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{$id}.png";
    }
    public static function getPokemonDataFromUrl(string $url) : PokeApiResponse{
        $data = file_get_contents($url);
        $data = json_decode($data);
        $id = $data->id;
        $name = $data->name;
        $type = $data->types[0]->type->name;
        $imgUrl = pokeApiRepository::getPokemonImgUrl($id); 
        $pokemonData = new PokeApiResponse($name, $imgUrl, $type);
        return $pokemonData;
    }
}