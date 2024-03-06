"use server"

import { db } from "@/server/db";
import { auth } from "@clerk/nextjs";

export const getFolderById= async(id:string)=>{
    const { userId } = auth();
    if (!userId) {
        throw new Error("Unauthorized");
      }

      try {
        const file= await db.folder.findUnique({
            where :{
                id
            }
        })
        return file
      } catch (error) {
        console.log(error);
      }
}