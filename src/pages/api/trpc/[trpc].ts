import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "@api/root.ts";
import { createTRPCContext } from "@api/trpc.ts";
import { env } from "~/env.js";

// Export API handler
export default createNextApiHandler({
	router: appRouter,
	createContext: createTRPCContext,
	onError: env.NODE_ENV === "development"
		? ({ path, error }) => {
			console.error(
				`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
			);
		}
		: undefined,
});
