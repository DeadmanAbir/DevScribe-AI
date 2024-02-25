import { getFileDetails } from './getFileDetails';
import { createMessage } from './createMessage';
import { getRecentChat } from './getRecentChat';
import { createTRPCRouter } from '../../trpc';

export const chatRouter = createTRPCRouter({
	getFileDetails,
	createMessage,
	getRecentChat
});