import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { URL } from "node:url";
// import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // { find: "@", replacement: resolve(new URL("./lib", import.meta.url)) },
    ],
  },
});
