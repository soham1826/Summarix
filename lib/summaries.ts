import { SummaryType } from "@/types/summary";
import { getDbconnection } from "./db";

export async function getSummaries(userId: string) {
  const sql = await getDbconnection();
  const summaries =
    await sql`SELECT * FROM pdf_summaries WHERE user_id = ${userId} ORDER BY created_at DESC`;
//   console.log(summaries);
  return summaries as SummaryType[];
}


export async function getSummaryById(id:string){
    try {
        const sql = await getDbconnection()
        const [summary] = await sql`SELECT 
        id, 
        user_id , 
        title , 
        original_file_url , 
        summary_text , 
        status , 
        created_at , 
        updated_at , 
        file_name , LENGTH(summary_text)- LENGTH(REPLACE(summary_text,' ', ''))+1 as word_count FROM pdf_summaries WHERE id = ${id} ORDER BY created_at DESC`;
        console.log(typeof(summary));
        return summary;
    } catch (error) {
        console.log("Error fetching summmary by id", error)
        return null
    }
}