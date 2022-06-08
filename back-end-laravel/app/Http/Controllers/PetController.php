<?php

namespace App\Http\Controllers;

use App\Http\Requests\PetRequest;
use App\Models\PetModel; 

class PetController extends Controller
{
  /**
   * Retorna a lista de pets cadastrados
   * 
   * @return Collection
   */
  public function index()
  {
    return PetModel::get();
  }

  /**
   * Cria um pet no banco de dados
   * 
   * @param PetRequest $request
   * @return Pet
   */
  public function store(PetRequest $request)
  {
    $data = $request->all();

    return PetModel::create($data);
  }
}
