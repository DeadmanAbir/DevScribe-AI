import { publicProcedure } from "../../trpc";
import { currentUser } from "@clerk/nextjs";
import { db } from "@/server/db";
export const authCallback = publicProcedure.query(async ({ ctx }) => {
    try {

        const user = await currentUser();
        if (!user) throw new Error("No user");

        let dbUser = await db.user.findUnique({
            where: {
                id: user.id
            }
        });
        if (!dbUser) {
            // New user: add user to db
            dbUser = await db.user.create({
                data: {
                    id: user.id,
                    email: user.emailAddresses[0].emailAddress
                }
            });

        }
    } catch (e) {
        console.error(e);
        return { success: false };
    }
    return { success: true };

});
