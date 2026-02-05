import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // Serve static /secret/ directory properly
        {
            name: 'serve-secret-directory',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    // If requesting /secret/ or /secret, serve the index.html
                    if (req.url === '/secret' || req.url === '/secret/') {
                        req.url = '/secret/index.html';
                    }
                    next();
                });
            }
        }
    ],
    base: '/', // Custom domain heypranav.com
})
