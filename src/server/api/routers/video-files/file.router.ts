import { createFile } from './create-file';
import { getFiles } from './get-files';
import { deleteFile } from './delete-file';
import { createTRPCRouter } from '../../trpc';


export const fileRouter = createTRPCRouter({
	createFile,
    getFiles,
    deleteFile,
});