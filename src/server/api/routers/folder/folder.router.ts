import { createFolder } from './createFolder';
import { getFolders } from './getFolders';
import { deleteFolder } from './deleteFolder';
import { updateFolder } from './updateFolder';
import { createTRPCRouter } from '../../trpc';

export const folderRouter = createTRPCRouter({
	createFolder,
    getFolders,
    deleteFolder,
    updateFolder
});