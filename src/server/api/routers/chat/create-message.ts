import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure } from "../../trpc";
import { db } from "@/server/db";
import { answerRetrieval } from "./create-message-functions";

export const createMessage = publicProcedure
  .input(
    z.object({
      fileId: z.string(),
      message: z.string(),
      collection: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const { fileId, message, collection } = input;

    try {
      const createdUserMessage = await db.message.create({
        data: {
          fileId: fileId,
          text: message,
          isUserMessage: true,
        },
      });
      const llmAnswer = await answerRetrieval(message, collection, fileId);
      console.log(llmAnswer);
      const createdAiMessage = await db.message.create({
        data: {
          fileId: fileId,
          text: llmAnswer,
          isUserMessage: false,
        },
      });
      console.log("----------saving msg to db")
      return llmAnswer;
    } catch (e) {
      console.error(e);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to create message",
      });
    }
  });
