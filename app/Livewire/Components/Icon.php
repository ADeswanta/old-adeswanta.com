<?php

namespace App\Livewire\Components;

use Livewire\Component;

class Icon extends Component
{
    public $class = '';
    public $name = '';

    public function mount($name, $class = null)
    {
        $this->name = $name;
        $this->class = $class;
    }

    // <!-- Because she competes with no one, no one can compete with her. -->
    public function render()
    {
        return <<<'HTML'
            <i class="material-symbols ".$class >
                {{ $name }}
            </i>
        HTML;

    }
}
