import React from "react";

type ImageControlProps = Readonly<{
	imageFilter: string;
	setImageFilter: (value: string) => void;
}>;

export default function ImageControl({ imageFilter, setImageFilter }: ImageControlProps) {
	return (
		<form className="grid gap-y-2 sm:grid-cols-5">
			<input
				type="text"
				className="col-span-3 border-2 p-2"
				placeholder="Search images..."
				value={imageFilter}
				onChange={(event) => setImageFilter(event.target.value)}
			/>
			{/* spacer */}
			<span className="col-span-1 max-sm:hidden" />
			<button
				type="button"
				className="col-span-1 border-2 border-black bg-secondary p-2 font-bold shadow-[4px_4px] shadow-white"
			>
				Upload
			</button>
		</form>
	);
}
