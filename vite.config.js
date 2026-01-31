import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Use '/' for custom domain, or '/Portfolio-Website/' for GitHub Pages subdirectory
    base: '/Portfolio-Website/',
})
