/* eslint-disable @typescript-eslint/naming-convention */
import { withUt } from "uploadthing/tw";
import { hocus } from "./tailwind.plugins.ts";

export default withUt({
	content: ["./src/**/*.tsx"],
	theme: {
		colors: {
			primary: "#f7cb45",
			secondary: "#f096e3",
			tertiary: "#4e9e93",
			white: "#fff",
			black: "#000",
			gray: "#666",
		},
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
			// BorderWidth: {
			// 	"3": "3px",
			// },
			screens: {
				xs: "480px",
			},
		},
	},
	plugins: [
		hocus(),
	],
});
