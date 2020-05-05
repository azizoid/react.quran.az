<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/privacypolicy', 'privacy');

Route::view('/{any?}', 'index')->where('any', '.*')->name('index');;
// Route::view('/', 'index');

