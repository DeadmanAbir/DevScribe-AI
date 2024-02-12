import { getFileSummary } from './getFileSummary';
import { router as tRouter } from '../../trpcServer/trpc';

export const chatRouter = tRouter({
	getFileSummary,
});