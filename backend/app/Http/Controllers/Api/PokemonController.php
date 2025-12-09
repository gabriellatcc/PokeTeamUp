<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\PokeApiRepository;

class PokemonController extends Controller
{
    protected $pokeApiRepository;

    public function __construct(PokeApiRepository $pokeApiRepository)
    {
        $this->pokeApiRepository = $pokeApiRepository;
    }

    public function index(Request $request)
    {
        $limit = $request->get('limit', 20);
        $page = $request->get('page', 1);

        $offset = ($page - 1) * $limit;

        try {
            $pokemons = $this->pokeApiRepository->getPokemonsData($limit, $offset);

            return response()->json([
                'data' => $pokemons,
                'limit' => (int) $limit,
                'page' => (int) $page,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch Pokémon data.'], 500);
        }
    }
}