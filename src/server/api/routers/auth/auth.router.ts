import { authCallback } from './authCallback';
import { createTRPCRouter} from '../../trpc';

// export const authRouter = tRouter({
// 	authCallback
// });

export const authRouter = createTRPCRouter({
	authCallback
});
