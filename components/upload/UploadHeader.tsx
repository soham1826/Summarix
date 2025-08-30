import { Sparkles } from "lucide-react"
import { Badge } from "../ui/badge"

export default function UploadHeader(){
    return (
        <div className="flex flex-col items-center text-center justify-center gap-4 md:gap-10">
          <div className="flex">
            <Badge className="bg-white text-green-400 border-[1px] border-green-400 px-6 py-3  rounded-full animate-pulse">
              <Sparkles className="h-6 w-6 mr-2 " />
              <p>AI Powered Content Generation</p>
            </Badge>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold">
            Start Uploading Your
            <span className="relative inline-block">
                {" "}
              <span className="relative z-10 px-2">PDF&apos;s</span>
              <span
                className="absolute bg-green-200/50 inset-0 -rotate-2 rounded-lg transform -skew-y-1"
                aria-hidden="true"
              ></span>
            </span>
          </h2>
          <p className="text-gray-400 text-md md:text-xl">
            Upload the PDF and let our AI do the Magic !
          </p>
        </div>
    )
}