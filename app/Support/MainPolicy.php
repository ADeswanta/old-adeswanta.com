<?php

namespace App\Support;

use Spatie\Csp\Policies\Basic;

class MainPolicy extends Basic
{
    public function configure()
    {
        parent::configure();

        $this->addDirective(Directive::SCRIPT, ['https://adeswanta.com'])
            ->addDirective(Directive::STYLE, ['https://adeswanta.com']);
    }
}
