<?php

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Api\PokemonController;

Route::get('/users',function(){
    return UserResource::collection(User::all());
});

Route::post('/register', [RegisteredUserController::class, 'store']);

Route::get('/pokemons', [PokemonController::class, 'index']);