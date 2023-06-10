import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import "@unocss/reset/tailwind.css";
import "uno.css";
export default defineConfig({
  plugins: [
    vue(),
    unocss({
      presets: [presetUno(), presetDaisy()],
    }),
  ],
});
