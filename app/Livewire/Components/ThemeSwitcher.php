<?php

namespace App\Livewire\Components;

use Livewire\Component;

class ThemeSwitcher extends Component
{
    public $mode = "auto";

    public function toggle($mode) {
        $res = ($mode == $this->mode) ? "auto" : $mode;

        $this->mode = $res;
        return $res;
    }


    // <!-- If your happiness depends on money, you will never be happy with yourself. -->

    public function render()
    {
        return view('livewire.components.theme-switcher');
    }
}
