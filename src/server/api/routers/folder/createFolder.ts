import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { publicProcedure } from '../../trpc';
import { db } from '@/server/db';

export const createFolder = publicProcedure
    .input(z.object({
        folderName: z.string(),
        folderDescription: z.string()
    }))
    .mutation(async ({ ctx, input }) => {
        const { userId } = ctx;
        const { folderName, folderDescription } = input;

        try {
            const createdFolder = await db.folder.create({
                data: {
                    userId: userId,
                    name: folderName,
                    description: folderDescription
                },
            });
            return createdFolder;
        } catch (e) {
            console.error(e);
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to create folder" });

        }


    });
