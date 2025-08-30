import { GoogleGenAI } from "@google/genai";
import { SUMMARY_SYSTEM_PROMPT } from "@/utils/Prompts";
console.log("Gemini_API_key", process.env.GEMINI_API_KEY);
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generatePDFSummaryFromGemini = async(pdfText: string) => {
    try {
        const prompt  = `${SUMMARY_SYSTEM_PROMPT}\n\nTransform this document into an engaging , easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`

        const result = await ai.models.generateContent({
            model:"gemini-2.0-flash",
            contents:prompt
        })

        return result.text
    } catch (error) {
        console.log("GEMINI_ERROR", error)
    }
};
