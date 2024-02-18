import { getFileDetails } from './getFileDetails';
import { createMessage } from './createMessage';
import { getRecentChat } from './getRecentChat';
import { router as tRouter } from '../../trpcServer/trpc';

export const chatRouter = tRouter({
	getFileDetails,
	createMessage,
	getRecentChat
});