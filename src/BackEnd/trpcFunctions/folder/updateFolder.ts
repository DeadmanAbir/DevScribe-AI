import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure } from "@/BackEnd/trpcServer/trpc";
import { db } from "@/BackEnd/prisma";

export const updateFolder = publicProcedure
  .input(
    z.object({
      folderId: z.string(),
      name: z.string(),
      description : z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const { folderId, name, description } = input;

    try {
      const updatedFolder = await db.folder.update({
        where: {
          id: folderId,
        },
        data:{
           name,
           description 
        }
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
