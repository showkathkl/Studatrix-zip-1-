import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vite.dev/config/
export default defineConfig({
  base:"/Studatrix-zip-1-/",
  plugins: [react()],
})
