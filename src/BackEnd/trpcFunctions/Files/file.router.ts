import { createFile } from './createFile';
import { getFiles } from './getFiles';
import { deleteFile } from './deleteFile';
import { router as tRouter } from '../../trpcServer/trpc';

export const fileRouter = tRouter({
	createFile,
    getFiles,
    deleteFile
});