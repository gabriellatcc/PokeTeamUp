<?php

namespace App\Interfaces;

interface PokeApiInterface{
    public function getPokemonDataById(int $id);
    public function getPokemonsData(int $limit, int $offset);
    public function getPokemonDataByName(string $name);
}