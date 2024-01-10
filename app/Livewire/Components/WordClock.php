<?php

namespace App\Livewire\Components;

use Livewire\Component;

class WordClock extends Component
{
    public $timezone = '';

    public function mount() {
        $this->timezone = date_default_timezone_get();
    }

    public function setTimezone($zone) {
        $this->timezone = $zone;
    }

    public function render()
    {
        date_default_timezone_set($this->timezone);

        return view('livewire.components.word-clock')->with([
            'time' => [date("H", time()), date("i", time())],
            'offset' => str_replace("+", "", date("P", time()))
        ]);
    }
}
