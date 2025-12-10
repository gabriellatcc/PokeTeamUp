<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pokemon;

class Team extends Model
{   
    /**
     *
     * @var string
     */
    protected $table = 'team';

    /** @use HasFactory<\Database\Factories\TeamFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
       'user_id',
       'name',
    ];
    
    /**
     * Get the user that owns the team.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the pokemons that are members of the team.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function pokemons() {
        return $this->belongsToMany(
            Pokemon::class, 
            'team_members', 
            'team_id',
            'pokemon_id'   
        )
        ->withPivot('position') //colunm position
        ->withTimestamps();
    }
}