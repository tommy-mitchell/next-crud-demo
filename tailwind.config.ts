/* eslint-disable @typescript-eslint/naming-convention */
import type { Config } from "tailwindcss";
import { hocus } from "./tailwind.plugins.ts";

export default {
	content: ["./src/**/*.tsx"],
	theme: {
		container: {
			center: true,
			padding: "15vw",
			screens: {
				"2xl": "1440px",
			},
		},
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
