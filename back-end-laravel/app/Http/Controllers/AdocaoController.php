<?php

namespace App\Http\Controllers;

use App\Models\AdocaoModel;
use Illuminate\Http\Request;

class AdocaoController extends Controller
{
    /**
     *  Cria um novo registro de adocao
     * 
     * @param Request $request
     * @return AdocaoModel
     *  */
    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'valor' => ['required', 'numeric', 'between:10,100'],
            'pet_id' => ['required', 'int', 'exists:pets,id']
        ]);

        $data = $request->all();

        return AdocaoModel::create($data);
    }
}
