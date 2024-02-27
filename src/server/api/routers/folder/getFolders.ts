import { db } from '@/server/db';
import { publicProcedure } from '../../trpc';
import { TRPCError } from '@trpc/server';
export const getFolders = publicProcedure
  .query(async ({ ctx }) => {
    const { userId } = ctx;

    try{
        const folders = await db.folder.findMany({
            where: {
              userId
            },
            orderBy: {
              createdAt: "desc"
            }
          });
      
          return folders;
    }catch(e){
        console.error(e);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to get folder" });

    }
  });
