import React from "react";
import type { IconType } from "react-icons";
import VisuallyHidden from "@components/VisuallyHidden";

// TODO: type-fest OneOf
type IconProps = Readonly<{
	icon: IconType;
	description: string;
	/** @default "span" */
	as?: "button" | "a" | "span";
	onClick?: () => void;
}>;

export default function Icon({ icon, description, as = "span", onClick }: IconProps) {
	const id = React.useId();

	// TODO: type = button
	const Wrapper = as;
	const IconTag = icon;

	return (
		<Wrapper onClick={onClick}>
			<VisuallyHidden id={id}>{description}</VisuallyHidden>
			<IconTag className="text-2xl" aria-describedby={id} />
		</Wrapper>
	);
}
