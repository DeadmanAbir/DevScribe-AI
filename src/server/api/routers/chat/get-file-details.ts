import { db } from "@/server/db";
import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { TRPCError } from "@trpc/server";
export const getFileDetails = publicProcedure
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
        include: {
          concepts: true,
        },
      });
      return file;
    } catch (e) {
      console.error(e);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to get folder",
      });
    }
  });
