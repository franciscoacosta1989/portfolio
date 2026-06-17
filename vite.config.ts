import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // Instructs Vite to treat raw binaries and documents as static files instead of JavaScript modules
  assetsInclude: ['**/*.docx', '**/*.pdf', '**/*.txt', '**/*.zip', '**/*.mp4']
})