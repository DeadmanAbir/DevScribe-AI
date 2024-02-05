import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { publicProcedure } from '@/BackEnd/trpcServer/trpc';
import { db } from '@/BackEnd/prisma';

export const createFile = publicProcedure
    .input(z.object({
       url : z.string(),
       name : z.string(),
       folderId: z.string()
    }))
    .mutation(async ({ ctx, input }) => {
        const { userId } = ctx;
        const { url, name, folderId } = input;

        try {
            const createdFile = await db.file.create({
                data: {
                    folderId: folderId,
                    name: name,
                    url: url,
                    collection: Math.random().toString(36).substring(7)
                },
            });
            return createdFile;
        } catch (e) {
            console.error(e);
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to create file" });

        }


    });
