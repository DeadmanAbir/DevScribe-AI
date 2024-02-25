import { initTRPC } from '@trpc/server';
import { authRouter } from '../trpcFunctions/auth/auth.router';
import { folderRouter } from '../trpcFunctions/folder/folder.router';
import { fileRouter } from '../trpcFunctions/Files/file.router';
import { chatRouter } from '../trpcFunctions/chat/chat.router';
const t = initTRPC.create();
export const appRouter : any = t.router({
    callback: authRouter,
    folder : folderRouter,
    file : fileRouter,
    chat : chatRouter
})



export type AppRouter = typeof appRouter;