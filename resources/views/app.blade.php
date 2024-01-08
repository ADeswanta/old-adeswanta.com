<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lexend:ital,wght@0,100..900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <!-- Styles -->
        <style>

        </style>

        @cspMetaTag(App\Support\MainPolicy::class)
        @viteReactRefresh
        @vite([
          'resources/js/app.jsx',
          'resources/css/app.scss',
          'resources/css/font.scss',
          "resources/js/Pages/{$page['component']}.jsx"
        ])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
