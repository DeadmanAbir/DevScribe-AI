import { authCallback } from './auth-callback';
import { createTRPCRouter} from '../../trpc';

export const authRouter = createTRPCRouter({
	authCallback
});
