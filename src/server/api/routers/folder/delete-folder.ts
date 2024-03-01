import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure } from "../../trpc";
import { db } from "@/server/db";
import { qdrant } from "@/lib/utils";
export const deleteFolder = publicProcedure
  .input(
    z.object({
      folderId: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const { folderId } = input;

    try {
      //check wheether the caller is owner or not
      const folder = await db.folder.findFirst({
        where: {
          id: folderId,
        },
        include: {
          files: true,
        },
      });
      if (!folder || folder.userId !== ctx?.userId) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to delete this folder",
        });
      }

      for (const file of folder.files) {
        // Delete from QDrant database
        await qdrant.deleteCollection(file.collection);
      }
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
