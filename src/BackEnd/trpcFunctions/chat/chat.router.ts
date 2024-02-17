import { getFileDetails } from './getFiledETAILS';
import { router as tRouter } from '../../trpcServer/trpc';

export const chatRouter = tRouter({
	getFileDetails,
});