import { db } from '@/server/db';
import{ z }from 'zod';
import { publicProcedure } from '../../trpc';
import { TRPCError } from '@trpc/server';
export const getFiles = publicProcedure
.input(z.object({
    
    folderId: z.string()
 })).query(async ({ ctx, input }) => {
const { folderId } = input;
    try{
        const files = await db.file.findMany({
            where: {
              folderId
            },
            orderBy: {
              createdAt: "desc"
            }
          });
          if (!files) {
            throw new TRPCError({ code: "NOT_FOUND", message: "Files not found" });
          }
      
          return files;
    }catch(e){
        console.error(e);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to get files" });

    }
  });
