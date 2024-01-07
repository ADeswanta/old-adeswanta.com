<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\WelcomeController;

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

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/projects', function () {
  return Inertia::render('WIP');
});

Route::get('/gallery', function () {
  return Inertia::render('WIP');
});

Route::get('/feeds', function () {
  return Inertia::render('WIP');
});

Route::get('/about', function () {
  return Inertia::render('WIP');
});
