"use client";

import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { CgSpinner as SpinnerIcon } from "react-icons/cg";
import ImageControl from "@components/ImageControl";
import ImageGrid from "@components/ImageGrid";
import { api } from "@utils/api.ts";

//
// export const UserContext = React.createContext<{ userId: string; }>();

export default function ImageApp() {
	const [imageFilter, setImageFilter] = React.useState("");

	const [userId] = useLocalStorage("userId", "test-1");
	const images = api.image.getAll.useQuery({ userId });

	//
	// const userContextValue = React.useMemo(
	// 	() => ({ userId }),
	// 	[userId],
	// );

	return (
		images.isLoading
			? (
				<p className="flex h-full items-center justify-center gap-x-2 text-2xl font-bold">
					<SpinnerIcon className="animate-spin" />
					Loading...
				</p>
			)
			: (
				<>
					<ImageControl imageFilter={imageFilter} setImageFilter={setImageFilter} />
					<ImageGrid
						images={images.data!.filter(({ name }) => name.toLowerCase().includes(imageFilter.toLowerCase()))}
					/>
				</>
			)
	);
}
