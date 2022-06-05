<?php

namespace App\Http\Controllers;

use App\Models\PetModel;
use Illuminate\Http\Request;

class PetController extends Controller
{
    public function index()
    {
         return PetModel::get();
    }
}
