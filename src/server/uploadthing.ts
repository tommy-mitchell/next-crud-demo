import { createUploadthing, type FileRouter as UTFileRouter } from "uploadthing/next-legacy";
import { UTApi } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const fileRouter = {
	// Define as many FileRoutes as you like, each with a unique routeSlug
	imageUploader: f({ image: { maxFileSize: "4MB" } })
		.onUploadComplete(async ({ file }) => {
			// This code RUNS ON YOUR SERVER after upload
			console.log("Upload complete!");
			console.log("file url", file.url);
		}),
} satisfies UTFileRouter;

export type FileRouter = typeof fileRouter;

export const utapi = new UTApi();
