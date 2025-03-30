import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// No base needed for root GitHub Pages repo (like myke-awoniran.github.io)
export default defineConfig({
    plugins: [react()],
});
