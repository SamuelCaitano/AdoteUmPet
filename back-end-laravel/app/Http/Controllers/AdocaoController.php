<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdocaoRequest;
use App\Http\Resources\AdocaoCollection;
use App\Models\AdocaoModel; 

class AdocaoController extends Controller
{
    public function index( )
    {
       $adocoes = AdocaoModel::with('pet')->get();

       return new AdocaoCollection($adocoes);
    }
    /**
     *  Cria um novo registro de adocao
     * 
     * @param AdocaoRequest $request
     * @return Adocao
     *  */
    public function store(AdocaoRequest $request)
    {
        $data = $request->all();

        return AdocaoModel::create($data);
    }
}
