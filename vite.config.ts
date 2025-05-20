import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { URL, fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { existsSync } from "node:fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "!",
        replacement: fileURLToPath(new URL("./lib", import.meta.url)),
        customResolver(source, importer) {
          const parts = source.split(".", 2);
          const path = resolve(
            dirname(importer ?? ""),
            parts[0],
            `index.${parts[1]}`
          );
          console.log(path);
          if (existsSync(path)) return { id: path };
        },
      },
      { find: "@", replacement: resolve(__dirname, "./lib") },
    ],
    extensions: [".vue", ".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
  },
});
