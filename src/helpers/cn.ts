import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { ensureArray } from "@utils";

const twMerge = extendTailwindMerge({
	override: {
		theme: {
			colors: [
				"primary",
				"secondary",
				"tertiary",
				"white",
				"black",
			],
		},
	},
});

export const cn = (input: ClassValue | ClassValue[], ...inputs: ClassValue[]) => (
	twMerge(clsx(ensureArray(input), ...inputs))
);

export const cnx = (base: string, input: ClassValue | ClassValue[], ...inputs: ClassValue[]) => (
	twMerge(base, clsx(ensureArray(input), ...inputs))
);

export type ClassName = ClassValue | ClassValue[];

export type ClassNameProp = Readonly<{
	className?: ClassName;
}>;

export type PropsWithClassName<PropsType> = Omit<PropsType, "className"> & ClassNameProp;
