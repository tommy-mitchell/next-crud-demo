import React from "react";
import { HiOutlinePencilAlt as EditIcon } from "react-icons/hi";
import Icon from "@components/Icon";
import type { Image as ApiImage } from "@api/routers/image.ts";

// dprint-ignore
type DisplayImageProps = ApiImage & Readonly<{
	onEdit: () => void;
}>;

export default function DisplayImage({ url, name, onEdit }: DisplayImageProps) {
	return (
		<div className="relative">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={url}
				alt={name}
				className="aspect-video h-full w-full rounded-br-3xl rounded-tl-3xl border-8 border-white object-cover shadow-[0_0_0_3px] shadow-black"
			/>
			<span className="absolute bottom-2 left-2 flex gap-x-1 rounded-tr-lg bg-white pl-1 pr-3 pt-1 font-semibold text-black">
				<Icon
					icon={EditIcon}
					description="Edit image details"
					className="text-gray hocus:text-black"
					as="button"
					onClick={onEdit}
				/>
				{name}
			</span>
		</div>
	);
}
