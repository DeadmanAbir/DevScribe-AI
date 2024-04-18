import { db } from "@/server/db";
import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { TRPCError } from "@trpc/server";
import { summaryRetrieval } from "./file-functions";

export const getVideoSummary = publicProcedure
  .input(
    z.object({
      fileId: z.string(),
    })
  )
  .query(async ({ ctx, input }) => {
    const { fileId } = input;
    try {
      const file = await db.file.findUnique({
        where: {
          id: fileId,
        },
      });

      if (!file) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "File not found",
        });
      }

      if (file.summary) {
        return file.summary;
      }

      // need to generate summary
      const summary = await summaryRetrieval(file.collection);
      await db.file.update({
        where: {
          id: fileId,
        },
        data: {
          summary: summary,
        },
      });
      return summary;
    } catch (e) {
      console.error(e);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to get files",
      });
    }
  });
