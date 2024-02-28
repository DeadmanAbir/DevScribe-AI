import { db } from "@/server/db";
import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { TRPCError } from "@trpc/server";
export const getRecentChat = publicProcedure
  .input(
    z.object({
      fileId: z.string(),
    })
  )
  .query(async ({ ctx, input }) => {
   
    const { fileId } = input;
    try {
      const message = await db.message.findMany({
        where: {
           fileId,
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: 20
      });
      return message;
    } catch (e) {
      console.error(e);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to get messages",
      });
    }
  });
