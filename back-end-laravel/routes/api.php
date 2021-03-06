<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/pets', 'PetController@index')->name('pets');

Route::post('/pets', 'PetController@store')->name('pets');

Route::get('/adocoes', 'AdocaoController@index')->name('adocoes');

Route::post('/adocoes', 'AdocaoController@store')->name('adocoes');
