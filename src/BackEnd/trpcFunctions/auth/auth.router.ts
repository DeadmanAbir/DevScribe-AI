import { authCallback } from './authCallback';
import { router as tRouter } from '../../trpcServer/trpc';

export const authRouter = tRouter({
	authCallback
});