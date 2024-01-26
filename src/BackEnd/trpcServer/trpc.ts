import {TRPCError, initTRPC } from '@trpc/server';
import {auth} from '@clerk/nextjs';
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
const middleware = t.middleware;
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */

const isAuth = middleware(async (opts) => {
	 const { userId } : { userId: string | null } = auth();


	if ( !userId) {
		throw new TRPCError({ code: "UNAUTHORIZED" })
	}

	return opts.next({
		ctx: {
			userId	
		}
	})
})


export const router = t.router;
export const publicProcedure = t.procedure.use(isAuth);