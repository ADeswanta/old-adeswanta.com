import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        laravel({
            // buildDirectory: "/",
            input: ['resources/css/app.scss', 'resources/css/font.scss', 'resources/js/app.jsx'],
            refresh: true
        }),
        svgr(),
        react(),
    ],
    publicDir: '/public'
});
