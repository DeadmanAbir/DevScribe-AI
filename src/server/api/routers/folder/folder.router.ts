import { createFolder } from './create-folder';
import { getFolders } from './get-folders';
import { deleteFolder } from './delete-folder';
import { updateFolder } from './update-folder';
import { createTRPCRouter } from '../../trpc';

export const folderRouter = createTRPCRouter({
	createFolder,
    getFolders,
    deleteFolder,
    updateFolder
});