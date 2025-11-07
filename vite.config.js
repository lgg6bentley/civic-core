// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set the repository name here
const REPO_NAME = 'civic-core'; 

// https://vitejs.dev/config/
export default defineConfig({
  // **CRITICAL FIX: Using the defined variable REPO_NAME**
  base: `/${REPO_NAME}/`, 
  plugins: [react()],
});
