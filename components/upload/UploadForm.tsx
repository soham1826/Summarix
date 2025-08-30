"use client";
import { toast} from "sonner";
import UploadFormInput from "./UploadFormInput";
import { z } from "zod/v4";
import { useUploadThing } from "@/utils/uploadthing";
import { generatePDFSummary, storePDFsummaryAction } from "@/actions/upload-actions";
import { useRef } from "react";
import { useRouter } from "next/navigation";
const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid File" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

export default function UploadForm() {
  const formRef = useRef<HTMLFormElement>(null); 
  const router = useRouter()

  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast.success("uploaded successfully!");
    },
    onUploadError: () => {
      toast.error("error occurred while uploading");
    },
    onUploadBegin: ({  }) => {
      toast.success("upload has begun");
    },
  });

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    const validatedFields = schema.safeParse({file})
    if(!validatedFields.success){
        const flattedError  = z.flattenError(validatedFields.error)
        toast.error(
            flattedError.fieldErrors.file?.[0] ?? 'Invalid File'
        )
        return;
    }

    const resp = await startUpload([file])
    if(!resp){
      console.log("Something went wrong")
      return 
    }

    const result = await generatePDFSummary(resp)
    const{data = null , messsage=null} =  result || {};

    if(data){
      let storeResult:any;
      toast.message("📁Processing of the PDF is done Uploading to the Database")
      if(data.summary){
        storeResult = await storePDFsummaryAction({
          summary:data.summary,
          fileUrl:resp[0].ufsUrl,
          title:data.title,
          fileName:data.FileName
        })
      }
      console.log(storeResult);
      toast.message("✅Your Summary is Done and Saved !")
      router.push(`/summaries/${storeResult.data.id}`)
    }

    //validating the file


    //schema validation
    //upload file to upload thing
    //parse the pdf using Langchain
  };
  return (
    <div>
      <UploadFormInput formRef ={formRef} onSubmit={handleSubmit} />
    </div>
  );
}
