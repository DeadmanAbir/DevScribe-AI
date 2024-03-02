import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure } from "../../trpc";
import { db } from "@/server/db";
import {
  loadVideo,
  storeToDB,
  summaryRetrieval,
  keyConceptRetrieval,
  checkVideoContext,
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
      const check = await checkVideoContext(pageContent);

      if (!check) {
      return {
        code: "PAYLOAD_TOO_LARGE",
        message: "Context too large to render in GPT 3 turbo.",
      };
      }

      const qdrantStore = await storeToDB(chunks, collection);
      const summary = await summaryRetrieval(chunks);
      const conceptData = await keyConceptRetrieval(chunks);

      const newFileData = {
        folderId: folderId,
        name: name,
        url: url,
        userId : ctx.userId,
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
      console.error(e, url, ctx?.userId);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to create file",
      });
    }
  });
