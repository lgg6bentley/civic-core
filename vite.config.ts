import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// **Set the repository name here**
// This must exactly match your GitHub repository name: lgg6bentley/civic-core
const REPO_NAME = 'civic-core'; 

// https://vitejs.dev/config/
export default defineConfig({
  // **NEW: The base path for GH-Pages**
  base: `/${REPO_NAME}/`, 
  plugins: [react()],
})
