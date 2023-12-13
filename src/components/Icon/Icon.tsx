import React from "react";
import type { IconType } from "react-icons";
import VisuallyHidden from "@components/VisuallyHidden";
import { type ClassNameProp, cn } from "@helpers/cn.ts";

// TODO: type-fest OneOf
type IconProps =
	& ClassNameProp
	& Readonly<{
		icon: IconType;
		description: string;
		/** @default "span" */
		as?: "button" | "a" | "span";
		onClick?: () => void;
	}>;

export default function Icon({ icon, description, as = "span", onClick, className }: IconProps) {
	const id = React.useId();

	// TODO: type = button
	const Wrapper = as;
	const IconTag = icon;

	return (
		<Wrapper onClick={onClick}>
			<VisuallyHidden id={id}>{description}</VisuallyHidden>
			<IconTag className={cn(className, "text-2xl")} aria-describedby={id} />
		</Wrapper>
	);
}
