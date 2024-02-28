import { getFileDetails } from './get-file-details';
import { createMessage } from './create-message';
import { getRecentChat } from './get-recent-chats';
import { createTRPCRouter } from '../../trpc';

export const chatRouter = createTRPCRouter({
	getFileDetails,
	createMessage,
	getRecentChat
});