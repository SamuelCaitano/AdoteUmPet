<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdocaoModel extends Model
{
    protected $table = 'adocoes';
    
    protected $fillable = [
        'email',
        'price',
        'pet_id'
    ];

    /**
     * Define a relação a adoção com o pet
     * 
     * @return BelongsTo
     */
    public function Pet()
    {
        return $this->belongsTo(PetModel::class);
    }
}
