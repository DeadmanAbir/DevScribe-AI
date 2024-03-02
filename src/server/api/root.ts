import { authRouter } from "./routers/auth/auth.router";
import { chatRouter } from "./routers/chat/chat.router";
import { fileRouter } from "./routers/video-files/file.router";
import { folderRouter } from "./routers/folder/folder.router";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  callback : authRouter,
  chat : chatRouter,
  file : fileRouter,
  folder : folderRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
