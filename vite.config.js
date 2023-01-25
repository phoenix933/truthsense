import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import path from "path";

import manifest from "./manifest.json";

export default defineConfig({
  plugins: [crx({ manifest })],

  resolve: {
    alias: {
      $constants: [path.resolve(__dirname, "./src/constants")],
      $lib: [path.resolve(__dirname, "./src/lib")],
      $styles: [path.resolve(__dirname, "./src/styles")],
      $types: [path.resolve(__dirname, "./src/types")],
    },
  },
});
