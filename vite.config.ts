import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
 
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    host: '0.0.0.0',
    allowedHosts: [
      'ea9b8238-f960-4032-ae26-5d34289b77b9-00-26pmz2rfvlvmg.pike.replit.dev',
    ],
    cors: {
      origin: 'https://f4e5bc99-2c13-4f67-9672-f6a5529308c2-00-su454hi1fehf.pike.replit.dev',
      credentials: true,
    },
  },
});

