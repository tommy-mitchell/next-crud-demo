import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@api/trpc.ts";

let post = {
	id: 1,
	name: "Hello World",
};

export const postRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.query(async ({ input }) => {
			await new Promise((resolve) => setTimeout(resolve, 1000)); // eslint-disable-line no-promise-executor-return
			return {
				greeting: `Hello ${input.text}!`,
			};
		}),

	create: publicProcedure
		.input(z.object({ name: z.string().min(1) }))
		.mutation(async ({ input }) => {
			// Simulate a slow db call
			await new Promise((resolve) => setTimeout(resolve, 1000)); // eslint-disable-line no-promise-executor-return

			post = { id: post.id + 1, name: input.name };
			return post;
		}),

	getLatest: publicProcedure.query(() => {
		return post;
	}),
});
