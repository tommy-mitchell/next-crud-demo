import React from "react";

type ImageControlProps = Readonly<{}>;

export default function ImageControl({}: ImageControlProps) {
	return (
		<div className="grid grid-cols-5">
			<span className="col-span-3 border-2 border-black">Search images...</span>
			{/* spacer */}
			<span className="col-span-1" />
			<button type="button" className="col-span-1 border-2 border-black">Upload</button>
		</div>
	);
}
