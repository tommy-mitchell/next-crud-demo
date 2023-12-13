import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@api/trpc.ts";
import { utapi } from "~/server/uploadthing.ts";

const imageSchema = z.object({
	id: z.string(),
	name: z.string(),
	url: z.string(),
	// TODO: get width/height on upload, maybe allow describing alt
});

export type Image = z.infer<typeof imageSchema>;

export const imageRouter = createTRPCRouter({
	getAll: publicProcedure
		.input(z.object({
			userId: z.string().min(1),
		}))
		.output(
			z.array(imageSchema),
		)
		.query(async ({ input: { userId } }) => {
			console.log(`Retrieving images for user "${userId}"`);

			const files = await utapi.listFiles({});

			if (files.length === 0) {
				console.log("No files found");
				return [];
			}

			const ids = files.map((file) => file.id);
			const keys = files.map((file) => file.key);

			const images = await utapi.getFileUrls(keys);

			// TODO: retrieve metadata
			return images.map((image, index) => ({
				id: ids[index]!,
				name: ids[index]!,
				url: image.url,
			}));
		}),
	// Edit one
	// Delete one
});
