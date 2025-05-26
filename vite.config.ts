import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@components': resolve(__dirname, 'src/components'),
            '@assets': resolve(__dirname, 'src/assets'),
            '@hooks': resolve(__dirname, 'src/hooks'),
            '@utils': resolve(__dirname, 'src/utils'),
            '@context': resolve(__dirname, 'src/context'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@store': resolve(__dirname, 'src/store'),
            '@types': resolve(__dirname, 'src/@types'),
            '@constants': resolve(__dirname, 'src/constants')
        }
    }
});
