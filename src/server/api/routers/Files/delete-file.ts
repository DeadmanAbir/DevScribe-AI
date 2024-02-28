import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure } from "../../trpc";
import { db } from "@/server/db";

export const deleteFile = publicProcedure
  .input(
    z.object({
      fileId: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const { fileId } = input;

    try {
      const file = await db.folder.findFirst({
        where: {
          id: fileId,
        },
      });
      if(!file || file.userId !== ctx?.userId){
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to delete this file",
        });
      }
      const deletedFile = await db.file.delete({
        where: {
          id: fileId,
        },
      });
      return deletedFile;
    } catch (e) {
      console.error(e);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to delete file",
      });
    }
  });
