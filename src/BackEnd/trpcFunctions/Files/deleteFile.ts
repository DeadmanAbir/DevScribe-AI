import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure } from "@/BackEnd/trpcServer/trpc";
import { db } from "@/BackEnd/prisma";

export const deleteFile = publicProcedure
  .input(
    z.object({
      fileId: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const { fileId } = input;

    try {
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
