import { db } from '@/BackEnd/prisma';
import{ z }from 'zod';
import { publicProcedure } from '@/BackEnd/trpcServer/trpc';
import { TRPCError } from '@trpc/server';
export const getFiles = publicProcedure
.input(z.object({
    
    folderId: z.string()
 })).query(async ({ ctx, input }) => {
    const { userId } = ctx;
const { folderId } = input;
console.log("folderId",folderId);
    try{
        const folders = await db.file.findMany({
            where: {
              folderId
            }
          });
      
          return folders;
    }catch(e){
        console.error(e);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to get folder" });

    }
  });
