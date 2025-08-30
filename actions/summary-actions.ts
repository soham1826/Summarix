'use server'

import { getDbconnection } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";


export async function deleteSummaryAction(summaryId:string){

    try {
        const user = await currentUser();
        const sql = await getDbconnection();
        if(!user){
            throw new Error("User not found")
        }
        const resp  = await sql `DELETE FROM pdf_summaries
        WHERE id = ${summaryId} AND user_id=${user?.id} RETURNING id;`;
        //revalidate path
        if(resp.length > 0){
            revalidatePath('/dashboard');
            return {success:true}
        }

        return {success:false}
    } catch (error) {
        console.log("Error deleting summary", error);
        return {success:false}
    }
}