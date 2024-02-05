import { db } from '@/BackEnd/prisma';
import { publicProcedure } from '@/BackEnd/trpcServer/trpc';
import { TRPCError } from '@trpc/server';
export const getFolders = publicProcedure
  .query(async ({ ctx }) => {
    const { userId } = ctx;

    try{
        const folders = await db.folder.findMany({
            where: {
              userId
            }
          });
      
          return folders;
    }catch(e){
        console.error(e);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to get folder" });

    }
  });
