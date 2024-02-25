import { createFile } from './createFile';
import { getFiles } from './getFiles';
import { deleteFile } from './deleteFile';
import { createTRPCRouter } from '../../trpc';

export const maxDuration = 300;

export const fileRouter = createTRPCRouter({
	createFile,
    getFiles,
    deleteFile,
});