import React from "react";
import { HiOutlineCheckCircle as CheckIcon, HiOutlineTrash as DeleteIcon } from "react-icons/hi";
import Icon from "@components/Icon";
import type { Image as ApiImage } from "@api/routers/image.ts";

// dprint-ignore
type EditImageProps = ApiImage & Readonly<{
	onConfirm: () => void;
	onDelete: () => void;
}>;

export default function EditImage({ url, name, onConfirm, onDelete }: EditImageProps) {
	const [imageName, setImageName] = React.useState(name);
	const [imageDescription, setImageDescription] = React.useState("");

	return (
		<div className="relative">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={url}
				alt={name}
				className="aspect-video h-full w-full rounded-br-3xl rounded-tl-3xl border-8 border-white object-cover shadow-[0_0_0_3px] shadow-black"
			/>
			{/* TODO: size from image for width */}
			<form
				className="absolute bottom-2 left-2 grid w-[97%] grid-cols-[auto_1fr_auto] gap-3 bg-white pb-1 pl-1 pr-3 pt-4"
				onSubmit={onConfirm}
			>
				<div className="row-span-2 flex flex-col justify-center gap-y-4 border-r-2 border-dotted border-black pr-2">
					<Icon icon={DeleteIcon} description="Delete image" as="button" onClick={onDelete} />
					{/* TODO: color-tertiary */}
					<Icon icon={CheckIcon} description="Confirm edited image details" as="button" onClick={onConfirm} />
				</div>
				<input
					type="text"
					name="image-name"
					className="border-2 border-black px-1"
					value={imageName}
					onChange={(event) => setImageName(event.target.value)}
				/>
				<label htmlFor="image-name" className="text-right font-semibold italic">name</label>
				<input
					type="text"
					name="image-description"
					className="border-2 border-black px-1"
					value={imageDescription}
					onChange={(event) => setImageDescription(event.target.value)}
				/>
				<label htmlFor="image-description" className="text-right font-semibold italic">description</label>
			</form>
		</div>
	);
}
