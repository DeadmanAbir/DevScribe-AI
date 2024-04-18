import { db } from "@/server/db";
import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { TRPCError } from "@trpc/server";
import { keyConceptRetrieval, summaryRetrieval } from "./file-functions";
import { KeyConceptProps } from "@/types/chat/chat-types";

export const getConcepts = publicProcedure
  .input(
    z.object({
      fileId: z.string(),
    })
  )
  .query(async ({ input }) => {
    const { fileId } = input;
    try {
      const file = await db.file.findUnique({
        where: {
          id: fileId,
        },
        include: {
          concepts: true,
        },
      });
      if (!file) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "File not found",
        });
      }

      const collection = file.collection;

      if (file.concepts.length !== 0) {
        return file.concepts;
      }

      // need to generate concepts
      const data = await keyConceptRetrieval(collection);

      const conceptsToCreate = data.map((conceptData: KeyConceptProps) => ({
        concept: conceptData.concept,
        explanation: conceptData.explanation,
        header: conceptData.header,
        fileId: fileId,
      }));

      const createdConcepts = await db.concepts.createMany({
        data: conceptsToCreate,
      });

      return data;
    } catch (e) {
      console.error(e);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to get files",
      });
    }
  });
