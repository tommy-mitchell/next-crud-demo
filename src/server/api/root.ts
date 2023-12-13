import { imageRouter } from "@api/routers/image.ts";
import { createTRPCRouter } from "@api/trpc.ts";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	image: imageRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;
