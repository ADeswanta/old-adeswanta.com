<?php

use Illuminate\Support\Facades\Route;

use App\Livewire\Pages\Welcome;
use App\Livewire\Pages\WIP;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', Welcome::class);

Route::get('/projects', WIP::class);
Route::get('/gallery', WIP::class);
Route::get('/feeds', WIP::class);
Route::get('/about', WIP::class);
