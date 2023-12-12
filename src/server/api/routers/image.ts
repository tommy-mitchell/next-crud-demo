// upload
// get all images
// should search be here? or filter on front end?

import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@api/trpc.ts";
import { generateUniqueId } from "@utils/id.ts";

const imageSchema = z.object({
	id: z.string(),
	name: z.string(),
	url: z.string(),
});

export type Image = z.infer<typeof imageSchema>;

// TODO: better store
const images: Image[] = [];

export const imageRouter = createTRPCRouter({
	upload: publicProcedure
		.input(z.object({
			name: z.string().min(1),
			url: z.string().min(1),
		}))
		.output(z.object({
			success: z.boolean(),
		}))
		.mutation(async ({ input }) => {
			images.push({
				id: generateUniqueId(),
				...input,
			});

			return {
				success: true,
			};
		}),

	getAll: publicProcedure
		.output(
			z.array(imageSchema),
		)
		.query(() => {
			return images;
		}),
});
