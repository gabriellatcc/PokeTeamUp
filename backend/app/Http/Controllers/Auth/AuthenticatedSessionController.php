<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthenticatedSessionController extends Controller
{
    public function store(LoginRequest $request)
{
    $request->authenticate();
    
    /** @var \App\Models\User $user */
    $user = Auth::user(); 

    if ($user) {
        $token = $user->createToken('auth_token')->plainTextToken; 
        
        return response()->json([
            'user' => $user,
            'token' => $token,
            'token_type' => 'Bearer',
        ], 200); 
    }
    
    return response()->json(['message' => 'Authentication failed.'], 401);
}

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return response()->noContent();
    }
}