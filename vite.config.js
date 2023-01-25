import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import path from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import manifest from "./manifest.json";

export default defineConfig({
	plugins: [svelte(), crx({ manifest })],

	resolve: {
		alias: {
			$components: [path.resolve(__dirname, "./src/components")],
			$lib: [path.resolve(__dirname, "./src/lib")],
			$stores: [path.resolve(__dirname, "./src/stores")],
			$styles: [path.resolve(__dirname, "./src/styles")],
			$types: [path.resolve(__dirname, "./src/types")],
		},
	},
});
