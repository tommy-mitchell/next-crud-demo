import plugin from "tailwindcss/plugin";

export const hocus = () =>
	plugin(({ addVariant }) => {
		addVariant("hocus", ["&:hover", "&:focus"]);
		addVariant("hocus-visible", ["&:hover", "&:focus-visible"]);
		addVariant("group-hocus-visible", [":merge(.group):hover &", ":merge(.group):focus-visible &"]);
	});
