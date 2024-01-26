import { publicProcedure, router } from './trpc';
import { initTRPC } from '@trpc/server';
import { authRouter } from '../trpcFunctions/auth/auth.router';

const t = initTRPC.create();
export const appRouter = t.router({
    callback: authRouter
})



export type AppRouter = typeof appRouter;