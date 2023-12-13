import React from "react";
import { HiOutlineDocumentAdd as UploadIcon, HiOutlineDocumentSearch as SearchIcon } from "react-icons/hi";
import Icon from "@components/Icon";

type ImageControlProps = Readonly<{
	imageFilter: string;
	setImageFilter: (value: string) => void;
}>;

export default function ImageControl({ imageFilter, setImageFilter }: ImageControlProps) {
	return (
		<form className="grid gap-y-4 sm:grid-cols-5">
			<span className="relative col-span-3">
				<input
					type="text"
					className={`
						w-full rounded-tl-lg border-2 p-2 shadow-[-4px_4px] shadow-white
						focus:outline-dashed focus:outline-offset-8 focus:outline-tertiary
					`}
					placeholder="Search images..."
					value={imageFilter}
					onChange={(event) => setImageFilter(event.target.value)}
				/>
				<SearchIcon className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-2xl" />
			</span>
			{/* spacer */}
			<span className="col-span-1 max-sm:hidden" />
			<button
				type="button"
				className={`
					col-span-1
					flex justify-center gap-x-1
					border-2 border-black bg-secondary
					p-2 font-bold
					shadow-[4px_4px] shadow-white
					hocus:outline-dashed hocus:outline-offset-8 hocus:outline-tertiary
					max-sm:rounded-bl-lg sm:rounded-tr-lg
				`}
			>
				Upload <Icon icon={UploadIcon} description="Upload image" />
			</button>
		</form>
	);
}
