import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure } from "@/BackEnd/trpcServer/trpc";
import { db } from "@/BackEnd/prisma";
import {
  loadVideo,
  storeToDB,
  summaryRetrieval,
  keyConceptRetrieval,
} from "./fileFunctions";

export const createFile = publicProcedure
  .input(
    z.object({
      url: z.string(),
      name: z.string(),
      folderId: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const { userId } = ctx;
    const { url, name, folderId } = input;

    try {
      //check video has transcript or not
      const collection = new Date().getTime().toString(36);

      // load video

      const { chunks, title, description } = await loadVideo(url);
      const qdrantStore = await storeToDB(chunks, collection);
      const summary = await summaryRetrieval(chunks);
      const conceptData = await keyConceptRetrieval(chunks);

      const newFileData = {
        folderId: folderId,
        name: name,
        url: url,
        summary: summary,
        collection: collection,
        title,
        description,
        concepts: {
          create: conceptData,
        },
      };
      const createdFile = await db.file.create({
        data: newFileData,
        include: {
          concepts: true,
        },
      });
      return createdFile;
    } catch (e) {
      console.error(e);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to create file",
      });
    }
  });
