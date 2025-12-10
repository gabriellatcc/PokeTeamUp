<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class TeamController extends Controller
{
    /**
     * * Rota: POST /api/teams
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'The given data was invalid.',
                'errors' => $e->errors(),
            ], 422);
        }
        $userId = Auth::id();

        if (!$userId) {
            return response()->json(['message' => 'Unauthorized or missing user ID.'], 401);
        }

        $team = Team::create([
            'name' => $validatedData['name'],
            'user_id' => $userId,
        ]);

        return response()->json($team, 201);
    }


    /**
     * * Rota: GET /api/teams
     */
    public function index()
    {
        /** @var User $user */
        $user = Auth::user();

        if (!$user) {
             return response()->json(['message' => 'Not authenticated.'], 401);
        }

        $teams = $user->teams()->with('pokemons')->get();

        return response()->json($teams);
    }
    
    /**
     * Rota: DELETE /api/teams/{team}
     */
    public function destroy(Team $team)
    {
        if (Auth::id() !== $team->user_id) {
            return response()->json(['message' => 'You do not own this team.'], 403); // 403 Forbidden
        }

        $team->delete();

        return response()->json(['message' => 'Team deleted successfully.'], 200);
    }

}