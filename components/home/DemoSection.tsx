import { Pizza } from 'lucide-react'
import React from 'react'
import SummaryViewer from '../summaries/summary_viewer'

const DemoSection = () => {
  const summary = {
    summary_text:"Hello there my name is soham"
  }
  return (
    <section className='relative'>
      <div className='py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'> 
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">

        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: `polygon(
              74.1% 44.1%, 100% 61.6%, 97.5% 92.9%, 
              85.5% 96.9%, 80.7% 72%, 72.5% 32.5%, 
              60.2% 20.4%, 52.4% 44.8%, 47.5% 58.3%, 
              45.2% 32.4%, 26.9% 20.4%, 18.4% 45.7%, 
              0% 64.9%, 17.7% 92.9%, 38.3% 100%, 
              60.3% 97.8%, 75.1% 89.5%, 74.1% 44.1%
            )`,
          }}
        >
        </div>
        
      </div>
      <div className='flex flex-col items-center text-center space-y-4 '>
        <div className='inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4'>

          <Pizza className='text-green-400 2-6 h-6'/>
        </div>
          <h3 className='font-bold text-gray-500 text-lg lg:text-2xl max-w-2xl'>Watch how Summary maker transforms {" "}<span className='text-green-400'>this Next.js course PDF</span>{" "}  into an
          easy-to-read summary!</h3>
        </div>
        <div className='flex justify-center items-center px-2 sm:px-4 lg:px-6'>
           <SummaryViewer summary={summary.summary_text} />
        </div>
      </div>

      
    </section>)
}

export default DemoSection
