<?php

namespace App\Models;

class PokeApiResponse 
{
    public int $id;
    public string $name;
    public string $imgUrl;
    public array $types;

    /**
     * @param int $id
     * @param string $name
     * @param string $imgUrl
     * @param array $types
     */
    public function __construct(int $id, string $name, string $imgUrl, array $types){
        $this->id = $id;
        $this->name = $name;
        $this->imgUrl = $imgUrl;
        $this->types = $types;
    }

    /**
     * Implements the toArray() method to ensure that Laravel converts public properties to a JSON array correctly.
     */
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'imgUrl' => $this->imgUrl,
            'types' => $this->types,
        ];
    }
}