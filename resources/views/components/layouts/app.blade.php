<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>{{ isset($title) ? $title.' - ADeswanta' : 'ADeswanta' }}</title>

        <link rel="icon" type="image/x-icon" href="public/favicon.png">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lexend:ital,wght@0,100..900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />

        @vite([
            'resources/js/app.js',
            'resources/css/app.scss',
            'resources/css/font.scss',
        ])
    </head>
    <body>
        <livewire:components.custom-cursor />
        <livewire:pages.sections.greeting x-show="document.location.pathname == '/'" />
        <livewire:components.header />
        <div id="app">
            {{ $slot }}
        </div>
        <livewire:components.footer />
    </body>
</html>
