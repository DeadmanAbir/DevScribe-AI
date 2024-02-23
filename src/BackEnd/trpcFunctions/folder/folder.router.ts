import { createFolder } from './createFolder';
import { getFolders } from './getFolders';
import { deleteFolder } from './deleteFolder';
import { updateFolder } from './updateFolder';
import { router as tRouter } from '../../trpcServer/trpc';

export const folderRouter = tRouter({
	createFolder,
    getFolders,
    deleteFolder,
    updateFolder
});