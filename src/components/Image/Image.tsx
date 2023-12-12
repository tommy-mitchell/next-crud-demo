import React from "react";
import { type ClassNameProp, cn } from "@helpers";

// dprint-ignore
type ImageProps = ClassNameProp & Readonly<{
	src: string;
	alt?: string;
}>;

export default function Image({ src, alt, className }: ImageProps) {
	// dprint-ignore
	return (
		<img
			src={src}
			alt={alt}
			className={cn("", className)}
		/>
	);
}
