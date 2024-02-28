import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure } from "../../trpc";
import { db } from "@/server/db";

export const updateFolder = publicProcedure
  .input(
    z.object({
      folderId: z.string(),
      name: z.string(),
      description: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const { folderId, name, description } = input;

    try {
      const folder = await db.folder.findFirst({
        where: {
          id: folderId,
        },
      });
      if (!folder || folder.userId !== ctx?.userId) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to delete this folder",
        });
      }
      const updatedFolder = await db.folder.update({
        where: {
          id: folderId,
        },
        data: {
          name,
          description,
        },
      });
      return updatedFolder;
    } catch (e) {
      console.error(e);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to update folder",
      });
    }
  });
