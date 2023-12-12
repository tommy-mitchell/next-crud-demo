import React from "react";
import Image from "@components/Image";
import type { Image as ApiImage } from "@api/routers/image.ts";

type ImageGridProps = Readonly<{
	images: ApiImage[];
}>;

export default function ImageGrid({ images }: ImageGridProps) {
	return (
		<div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
			<h1 className="text-2xl font-bold lg:col-span-2">{images.length} images</h1>
			{images.map((image) => <Image key={image.id} {...image} />)}
		</div>
	);
}
