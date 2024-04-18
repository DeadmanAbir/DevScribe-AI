import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure } from "../../trpc";
import { db } from "@/server/db";
import {
  loadVideo,
  storeToDB,
  keyConceptRetrieval,
  checkVideoContext,
  isVideoLongerThan4Hours,
} from "./file-functions";
export const createFile = publicProcedure
  .input(
    z.object({
      url: z.string(),
      name: z.string(),
      folderId: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const { url, name, folderId } = input;

    try {
      const collection = new Date().getTime().toString(36);

      const { pageContent, chunks, title, description } = await loadVideo(url);
      const check = await isVideoLongerThan4Hours(url);

      if (!check) {
        return {
          code: "PAYLOAD_TOO_LARGE",
          message: "Video upto 4 hours is allowed",
        };
      }

      const qdrantStore = await storeToDB(chunks, collection);

      const newFileData = {
        folderId: folderId,
        name: name,
        url: url,
        userId: ctx.userId,

        collection: collection,
        title,
        description,
      };
      const createdFile = await db.file.create({
        data: newFileData,
      });
      return createdFile;
    } catch (e) {
      console.error(e, url, ctx?.userId);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to create file",
      });
    }
  });
