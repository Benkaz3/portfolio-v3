import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    define: {
      'process.env.VITE_CONTENTFUL_SPACE_ID': JSON.stringify(env.VITE_CONTENTFUL_SPACE_ID),
      'process.env.VITE_CONTENTFUL_ACCESS_TOKEN': JSON.stringify(env.VITE_CONTENTFUL_ACCESS_TOKEN)
    },
    plugins: [react()],
  }
})
