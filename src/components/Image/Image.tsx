import React from "react";
import type { Image as ApiImage } from "@api/routers/image.ts";
import { type ClassNameProp, cn } from "@helpers";

// dprint-ignore
type ImageProps = ClassNameProp & ApiImage & Readonly<Record<string, unknown>>;

export default function Image({ url, name, className }: ImageProps) {
	return (
		<div className="relative">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={url}
				alt={name}
				className={cn(
					className,
					"w-full h-full object-cover aspect-video border-white border-8 rounded-tl-3xl rounded-br-3xl shadow-black shadow-[0_0_0_3px]",
				)}
			/>
			<span className="absolute bottom-1 left-1 rounded-tr-lg bg-white px-3 py-1 font-semibold text-black">{name}</span>
		</div>
	);
}
