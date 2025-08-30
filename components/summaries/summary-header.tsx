import Link from "next/link";
import { Button } from "../ui/button";
import { Calendar, ChevronLeft, Clock } from "lucide-react";
import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";

export default function SummaryHeader({title , createdAt , reading_time}:{title:string , createdAt:string , reading_time:number}) {
  return (
    <div className="flex gap-4 mb-4 justify-between">
      <div className="space-y-6">
        <div className="flex items-center flex-wrap gap-4">
             <Badge className='bg-white/80
             backdrop-blur-xs text-green-400 border-[1px] border-green-400 px-4 py-1.5  rounded-full animate-pulse'>
            <Sparkles className='h-6 w-6 mr-2 '/>
            <p>AI powered Summary</p>
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-green-400"/>
              {new Date(createdAt).toLocaleDateString('en-US',{
                year:'numeric',
                month:'long',
                day:'numeric'
              })}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-green-400"/>
             {reading_time} min read
            </div>
            <div>
         <h1 className="md:text-4xl  text-2xl font-bold  bg-gradient-to-r from-green-400 via-blue-500 to to-green-800 bg-clip-text text-transparent">{title}</h1>
    </div>
        </div>
      </div>
      <div className="self-start"> 
        <Link href='/dashboard'>
          <Button variant='link' className="group flex items-center gap-1 sm:gap-2 hover:bg-white/80 backdrop-blur-xs rounded-full transition-all duration-200 shadow-xs hover:shadow-md border border-green-100/30 bg-green-100 px-2 sm:px-3"> 
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 transition-transform group-hover:-translate-x-0.5"/>
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">
              Back <span className="hidden sm:inline ">
                to Dashboard
              </span>
            </span>
          </Button>
        </Link>
      </div>

    </div>
    
  )
}
