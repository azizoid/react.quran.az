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

Route::get('/{s}', 'QuranController@index')->where(['s'=>'[0-9]+']);
Route::get('/{s}/{a}', 'QuranController@index')->where(['s'=>'[0-9]+', 'a'=>'[0-9]+']);
Route::get('/search/{q?}', 'QuranController@search')->where('q', '.+');;
Route::get('/random/{q?}', 'QuranController@random')->where('q', '.+');;