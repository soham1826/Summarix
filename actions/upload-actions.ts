"use server";
import { fetchandExtractPdfText } from "@/lib/langchain";
import { ClientUploadedFileData } from "uploadthing/types";
import { generatePDFSummaryFromGemini } from "@/lib/geminiai";
import { auth } from "@clerk/nextjs/server";
import { getDbconnection } from "@/lib/db";
import { formatFileNameAsTitle } from "@/utils/format-name";
import { revalidatePath } from "next/cache";
// import { revalidatePath } from "next/cache";

// type UploadData = {
//  serverData:{
//         userId:string,
//         file:{
//             url:string;
//             name:string

//         }
//     }
// }

interface PDFSummaryType{
    userId?: string;
    fileUrl: string;
    summary: string;
    title: string;
    fileName: string;
}

async function savePDfsummary({
  userId,
  fileUrl,
  summary,
  title,
  fileName,
}: PDFSummaryType) {
  try {
    const sql = await getDbconnection();
    const [savedSummary] = await sql`INSERT INTO pdf_summaries(
      user_id,
      original_file_url,
      summary_text,
      title,
      file_name
    ) VALUES (
      ${userId},
      ${fileUrl},
      ${summary},
      ${title},
      ${fileName}
    )RETURNING id, summary_text;`;
    return savedSummary ;
  } catch (error) {
    console.error("Error saving PDF summary", error);
    throw error;
  }
}
export async function generatePDFSummary(
  uploadResponse: ClientUploadedFileData<{
    userId: string;
    file: {
      url: string;
      name: string;
    };
  }>[]
) {
  if (!uploadResponse) {
    return {
      success: false,
      message: "File Upload Failed",
      data: null,
    };
  }

  const {
    serverData: {
      userId,
      file: { url: pdfUrl, name: FileName },
    },
  } = uploadResponse[0];

  if (!pdfUrl) {
    return {
      success: false,
      message: "File Upload Failed",
      data: null,
    };
  }

  try {
    const pdfText = await fetchandExtractPdfText(pdfUrl);
    console.log(pdfText);

    let summary;
    try {
      summary = await generatePDFSummaryFromGemini(pdfText);
      console.log(summary);

      const FormatedfileName = formatFileNameAsTitle(FileName)
      return {
        success: true,
        message: "Summary Generated",
        data: {
          summary,
          title:FormatedfileName,
          FileName

        },
      };
    } catch (error) {
      console.log("GEMINI_ERROR", error);
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "File Upload Failed",
      data: null,
    };
  }
}

export async function storePDFsummaryAction({
        fileUrl,
        summary,
        title,
        fileName,
    }:PDFSummaryType) {
  let savedSummary:any;
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "user not found",
      };
    }
    savedSummary = await savePDfsummary({
        userId,
        fileUrl,
        summary,
        title,
        fileName,
    });

    if(!savedSummary){
        return {
        success: false,
        message: "Failed to save PDF summary please try again",
     
      };
    }
    
    // Revalidating the Cache
    // revalidatePath('/')

  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error saving PDF summary",
    };
  }
  console.log(savedSummary);
  revalidatePath(`/summaries/${savedSummary.id}`)

  return {
      success:true,
      message:"Pdf summary succesfully saved",
      data:{
        id:savedSummary.id
      }
    }
}
