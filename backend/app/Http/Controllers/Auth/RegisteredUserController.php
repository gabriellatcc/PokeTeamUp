<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use App\Http\Requests\Auth\RegisterRequest;
use App\Services\AuthService;

class RegisteredUserController extends Controller
{
   protected AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    /**
     * Handle an incoming registration request.
     */
    public function store(RegisterRequest $request): Response
    {
        $validatedData = $request->validated();

        //creates the user in the database using the model
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        //triggers the registration event (for sending verification emails)
        event(new Registered($user));

        //logs in the user (creates the session cookie)
        Auth::login($user);

        //returns 204 No Content (SPA/Sanctum default)
        return response()->noContent(); 
    }
}
