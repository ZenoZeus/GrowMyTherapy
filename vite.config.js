import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: __dirname,
  server: {
    port: 3000,
    historyApiFallback: true, // 🔥 for BrowserRouter
  },
});
