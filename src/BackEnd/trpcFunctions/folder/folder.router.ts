import { createFolder } from './createFolder';
import { getFolders } from './getFolders';
import { router as tRouter } from '../../trpcServer/trpc';

export const folderRouter = tRouter({
	createFolder,
    getFolders
});