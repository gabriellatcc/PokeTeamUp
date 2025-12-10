<?php

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Api\PokemonController;
use App\Http\Controllers\Api\TeamController;

Route::get('/users', function(){
    return UserResource::collection(User::all());
});

Route::post('/register', [RegisteredUserController::class, 'store']);
Route::get('/pokemons', [PokemonController::class, 'index']);

Route::middleware(['auth:sanctum'])->group(function () {
    
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/teams', [TeamController::class, 'index']);
    Route::post('/teams', [TeamController::class, 'store']);
    Route::delete('/teams/{team}', [TeamController::class, 'destroy']);
    
});
