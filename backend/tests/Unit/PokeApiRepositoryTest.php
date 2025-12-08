<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Repositories\PokeApiRepository;
use App\Models\PokeApiResponse;

class PokeApiRepositoryTest extends TestCase
{
    /**
    * Tests whether the repository retrieves Pokémon data by ID and returns a PokeApiResponse object.  
    */    
    public function test_can_get_pokemon_data_by_id(): void
    {
        $repository = new PokeApiRepository();

        $pokemonData = $repository->getPokemonDataById(25);

        $this->assertInstanceOf(PokeApiResponse::class, $pokemonData);

        $this->assertEquals('pikachu', $pokemonData->name);

        $this->assertIsString($pokemonData->type);

        echo "\n\n--- DATA RECIVIED OF POKÉMON (ID 25) ---\n";
        print_r($pokemonData); 
        
    }
}