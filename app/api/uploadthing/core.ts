
import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";


const f = createUploadthing();

export const ourFileRouter  ={
    pdfUploader:f({
        pdf:{maxFileSize:'32MB'}
    }).middleware( async()=>{
        const user = await currentUser();

        if(!user) throw new UploadThingError("Unauthorized")
        return {userId : user.id}
    })
    .onUploadComplete(async({metadata, file})=>{
        console.log("Upload Completed" , metadata.userId);
        console.log('fileurl', file.ufsUrl)
        return {userId:metadata.userId , file:{url:file.ufsUrl , name:file.name}}
    })

} satisfies FileRouter 


export type OurFileRouter = typeof ourFileRouter