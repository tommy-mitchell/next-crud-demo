import React from "react";
import DisplayImage from "./DisplayImage.tsx";
import EditImage from "./EditImage.tsx";
import type { Image as ApiImage } from "@api/routers/image.ts";

type ImageProps = ApiImage;

export default function Image(props: ImageProps) {
	const [isEditing, setIsEditing] = React.useState(false);

	return isEditing
		? <EditImage {...props} onConfirm={() => setIsEditing(false)} onDelete={() => setIsEditing(false)} />
		: <DisplayImage {...props} onEdit={() => setIsEditing(true)} />;
}
