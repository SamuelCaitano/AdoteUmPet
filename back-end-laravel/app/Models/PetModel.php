<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PetModel extends Model
{
    protected $table = 'pets';

    protected $fillable = [
        'name',
        'description',
        'photo',
    ];
}
