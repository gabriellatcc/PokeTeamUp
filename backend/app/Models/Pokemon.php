<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    /** @use HasFactory<\Database\Factories\PokemonFactory> */
    use HasFactory;

    /**
     * The table associated with the model.
     */
    protected $table = 'pokemon';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'api_id',
        'name',
        'image_url',
        'types',
    ];

     /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected $casts = [
        'types' => 'array',//casts the JSON from the database to a PHP array
        'api_id' => 'integer',
    ];

    /**
     * Get the users who have favorited this character.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function favoritedBy()
    {
        return $this->belongsToMany(User::class, 'favorites', 'pokemon_id', 'user_id')
                    ->withTimestamps();
    }
}
