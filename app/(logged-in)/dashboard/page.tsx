
import EmptySummaryState from "@/components/summaries/empty-summary-state";
import SummaryCard from "@/components/summaries/SummaryCard";
import { Button } from "@/components/ui/button";
import { getSummaries } from "@/lib/summaries";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight, Plus } from "lucide-react";

import Link from "next/link";
import { redirect } from "next/navigation";


export default async function DashboardPage() {
  const user = await currentUser();
  const userId = user?.id
  if(!userId){
    return redirect("/sign-in");
  } 
    
  const uploadLimit = 5;
  const summaries = await getSummaries(userId);
// [
  //   {
  //     id:1,
  //     title:"Some title",
  //     summaryText:"description",
  //     created_at:'2025-06-21 14:50:39.45562+00',
  //     status:'completed',
  //     original_file_url:'some string'

  //   },
  //   {
  //     id:2,
  //     title:"Some title",
  //     summaryText:"description",
  //     created_at:'2025-06-21 14:50:39.45562+00',
  //     status:'completed',
  //     original_file_url:'some string'

      
  //   },
  //   {
  //     id:3,
  //     title:"Some title",
  //     summaryText:"description",
  //     created_at:'2025-06-21 14:50:39.45562+00',
  //     status:'completed',
  //     original_file_url:'some string'

      
  //   },
  //   {
  //     id:4,
  //     title:"Some title",
  //     summaryText:"description",
  //     created_at:'2025-06-21 14:50:39.45562+00',
  //     status:'completed',
  //     original_file_url:'some string'

      
  //   },
  //   {
  //     id:5,
  //     title:"Some title",
  //     summaryText:"description",
  //     created_at:'2025-06-21 14:50:39.45562+00',
  //     status:'completed',
  //     original_file_url:'some string'

      
  //   }
  // ]
  return (
    <main className="min-h-screen mb-4">
      <div className="container"> 
      <div className="flex items-center justify-between px-4 py-12 sm:py-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl tracking-tight font-bold bg-linear-to-r from-green-900 to-green-400 bg-clip-text text-transparent ">Your Summaries</h1>
        <p className="text-gray-600">Transform your PDF&apos;s into concise summaries</p>
        </div>
        <Button variant={'link'} className="bg-linear-to-r from-slate-900 to-green-400 hover:from-green-400 hover:to-slate-900 
          hover:scale-105
          hover:no-underline shadow-lg transition-all duration-300 text-white py-2 px-4">
            <Link className="flex flex-row items-center " href={'/upload'}>
              <Plus className="w-5 h-5 mr-2"/>
              New Summary
            </Link>
          </Button>
        </div>
        {summaries.length >= uploadLimit ? <div className=" bg-rose-50 border-rose-200 rounded-lg text-rose-500 p-4 mb-6">
          <p>You have reached the limit of {uploadLimit} Uploads on basic plan
          <Link className="font-medium underline underline-offset-4" href={'/#pricing'}>
          {' '}
            Click here to upgrade to pro{' '}
            <ArrowRight className="w-4 h-4 inline-block"/> 
          </Link>
          {' '}
          for unlimited uploads
          </p>
        </div>:  <></>}
        

        <div className="mb-6">
          {summaries.length == 0 ? <EmptySummaryState/> :<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 md:px-0">
            {summaries.map((summary)=>(
              <SummaryCard key={summary.id} summary={summary} />
            ))}
          </div>}
          
        </div>
      </div>
    </main>
  )
}
