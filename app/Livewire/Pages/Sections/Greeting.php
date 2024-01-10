<?php

namespace App\Livewire\Pages\Sections;

use Livewire\Component;
use Illuminate\Support\Facades\Route;
use App\Providers\RouteServiceProvider;

class Greeting extends Component
{
    public function render()
    {
        return view('livewire.pages.sections.greeting')->with([
            'isInRoot' => Route::current()->uri() == '/' ? 1 : 0
        ]);
    }
}
