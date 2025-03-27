import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // טוען את קובץ הסביבה הרלוונטי (.env.development / .env.production וכו')
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV || mode),
    },
    server: {
      port: 5173,
      open: true,
      proxy: {
        //for CORS protocol
        "/api": {
          target: env.VITE_API_URL, // לדוגמה: http://localhost:3000/api
          changeOrigin: true,
          secure: false,
        },
      },
    },
    build: {
      outDir: "dist",
    },
  };
});
