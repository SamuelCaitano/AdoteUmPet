<?php

namespace App\Http\Requests;

use App\Rules\AdoptOnce;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class AdocaoRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, mixed>
   */
  public function rules(Request $request)
  {
    return [
      'email' => [
        'required', 
        'email',
        new AdoptOnce($request->input('pet_id', 0))
      ],
      'price' => [
        'required', 
        'numeric', 
        'between:10,100'
      ],
      'pet_id' => [
        'required', 
        'int', 
        'exists:pets,id'
      ],
    ];
  }
}
