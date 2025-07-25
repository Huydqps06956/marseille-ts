import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('development')
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@components': resolve(__dirname, 'src/components'),
            '@assets': resolve(__dirname, 'src/assets'),
            '@hooks': resolve(__dirname, 'src/hooks'),
            '@utils': resolve(__dirname, 'src/utils'),
            '@contexts': resolve(__dirname, 'src/contexts'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@store': resolve(__dirname, 'src/store'),
            '@types': resolve(__dirname, 'src/types'),
            '@constants': resolve(__dirname, 'src/constants'),
            '@api': resolve(__dirname, 'src/api'),
            '@router': resolve(__dirname, 'src/router')
        }
    }
});
