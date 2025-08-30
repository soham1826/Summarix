import { getSummaryById } from "@/lib/summaries";
import SourceInfo from "@/components/summaries/source-info";
import SummaryHeader from "@/components/summaries/summary-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText } from "lucide-react";
import SummaryViewer from "@/components/summaries/summary_viewer";
export default async function SummaryPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;
  const summary = await getSummaryById(id);

  if (!summary) {
    return (
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center my-10 gap-4">
          <h2 className="text-2xl font-bold "> Summary Not Found</h2>
          <p className="text-gray-700">
            {" "}
            The Summary you are looking for dosen&apos;t exsists or has been
            removed{" "}
          </p>
          <Button className="rounded-sm">
            <Link href={"/"}>Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }
  const { title, summary_text, file_name, original_file_url, word_count , created_at } = summary;

  const reading_time  = Math.ceil((word_count|| 0)/200)
  return (
    <div className="relative isolate min-h-screen">
      <div className="container mx-auto flex flex-col gap-4">
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          <div className="flex flex-col">
            <SummaryHeader createdAt={created_at} title={title} reading_time={reading_time} />
            {file_name && <SourceInfo file_name={file_name} originalFileUrl={original_file_url} summaryText={summary_text} createdAt={created_at} title={title} />}
            <div className="relative mt-4 sm:mt-8 lg:mt-8">
              <div className="relative mt-4 sm:mt-8 lg:mt-8">
                <div className="relative p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-rose-100/30 transition-all duration-300 hover:shadow-2xl hover:bg-white/90 max-w-4xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-orange-50/30 to-transparent opacity-50 rounded-2xl sm:rounded-3xl" />

                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground bg-white/90 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-xs">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                    {word_count?.toLocaleString()} Words
                  </div>

                  <div className="relative mt-8 sm:mt-6 flex justify-center">
                    <SummaryViewer summary={summary.summary_text} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
