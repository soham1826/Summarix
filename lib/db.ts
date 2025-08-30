'use server'
import {neon} from "@neondatabase/serverless"

export async function getDbconnection(){
    if(!process.env.DATABASE_URL){
        throw new Error('Neon Database URL not defined')
    }
    const sql = neon(process.env.DATABASE_URL);
    return  sql;
}