import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure } from "@/BackEnd/trpcServer/trpc";
import { db } from "@/BackEnd/prisma";

export const deleteFolder = publicProcedure
  .input(
    z.object({
      folderId: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const { folderId } = input;

    try {
      const deletedFolder = await db.folder.delete({
        where: {
          id: folderId,
        },
      });
      return deletedFolder;
    } catch (e) {
      console.error(e);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to delete folder",
      });
    }
  });
