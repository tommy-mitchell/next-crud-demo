import type { Config } from "tailwindcss";
import { hocus } from "./tailwind.plugins.ts";

export default {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			// TODO: add as variant to get min-h, max-h
			height: {
				"screen-d": "100dvh",
				"screen-s": "100svh",
				"screen-l": "100lvh",
			},
		},
	},
	plugins: [
		hocus(),
	],
} satisfies Config;
