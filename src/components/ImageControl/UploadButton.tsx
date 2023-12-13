import React from "react";
import { CgSpinner as SpinnerIcon } from "react-icons/cg";
import { generateMimeTypes } from "uploadthing/client";
import { useUploadThing } from "@helpers/uploadthing.ts";
import { type ClassNameProp, cn } from "@helpers/cn.ts";

type UploadButtonProps =
	& ClassNameProp
	& Readonly<{
		children?: React.ReactNode;
	}>;

export default function UploadButton({ className, children }: UploadButtonProps) {
	const [hasUploaded, setHasUploaded] = React.useState(false);

	React.useEffect(() => {
		if (hasUploaded) {
			const timeout = setTimeout(() => {
				setHasUploaded(false);
			}, 3000);

			return () => clearTimeout(timeout);
		}

		return undefined;
	}, [hasUploaded]);

	const { startUpload, isUploading } = useUploadThing(
		"imageUploader",
		{
			onClientUploadComplete: () => setHasUploaded(true),
			onUploadError: () => {
				alert("Upload error");
				setHasUploaded(false);
			},
		},
	);

	const mimeTypes = generateMimeTypes(["image"])?.join(", ");

	return (
		<label
			// dprint-ignore
			className={cn(className, `
				cursor-pointer
				border-2 border-black bg-secondary
				shadow-[4px_4px] shadow-tertiary
				hocus:outline-dashed hocus:outline-offset-8 hocus:outline-tertiary
				max-sm:rounded-bl-lg sm:rounded-tr-lg
			`)}
		>
			<input
				type="file"
				className="hidden"
				accept={mimeTypes}
				disabled={isUploading || hasUploaded}
				onChange={(event) => {
					if (!event.target.files) {
						return;
					}

					console.log("files", event.target.files);

					// eslint-disable-next-line unicorn/prefer-spread
					void startUpload(Array.from(event.target.files));
				}}
			/>
			<span className="flex items-center justify-center gap-x-1 p-2 font-bold">
				{isUploading
					? (
						<>
							Uploading...
							<SpinnerIcon className="ml-1 animate-spin text-xl" />
						</>
					)
					: (
						hasUploaded
							? "Uploaded!"
							: children ?? "Upload image (4MB)"
					)}
			</span>
		</label>
	);
}
