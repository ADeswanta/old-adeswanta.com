import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

import livewire, {defaultWatches} from '@defstudio/vite-livewire-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js', 'resources/css/app.scss', 'resources/css/font.scss'],
            refresh: true,
        }),

        // livewire({
        //     refresh: ['resources/css/app.scss', 'resources/css/font.scss'],
        // }),
    ],
});
