import React from "react";
import type { Image } from "@api/routers/image.ts";

type ImageGridProps = Readonly<{
	images: Image[];
}>;

export default function ImageGrid({ images }: ImageGridProps) {
	return (
		<div className="grid grid-cols-2 gap-4 mt-4">
			<h1 className="col-span-2 text-2xl font-bold">{images.length} images</h1>
			{images.map((image) => (
				<img key={image.id} src={image.url} alt={image.name} className="w-full h-full object-cover" />
			))}
		</div>
	);
}
