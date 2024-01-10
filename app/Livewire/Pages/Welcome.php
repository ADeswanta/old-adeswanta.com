<?php

namespace App\Livewire\Pages;

use Livewire\Attributes\Title;
use Livewire\Component;

#[Title('Home')]
class Welcome extends Component
{
    public function render()
    {
        return view('livewire.pages.welcome');
    }
}
