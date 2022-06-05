<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdocaoModel extends Model
{
    protected $table = 'adocoes';
    
    protected $fillable = [
        'email',
        'valor',
        'pet_id'
    ];
}
