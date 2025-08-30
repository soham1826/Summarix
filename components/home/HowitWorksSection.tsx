import { BrainCircuit, FileText, FileOutput } from 'lucide-react';
import React, { ReactNode } from 'react'

type Step =  {
id:number;
icon:ReactNode;
label:string;
description:string
}
const steps:Step[]=[
  {
    id:1,
    icon:<FileText size={64} strokeWidth={1.5}/>,
    label:"Upload your PDF",
    description:"Simply drag and drop your PDF document or click to upload"
  },
  {
    id:2,
    icon:<BrainCircuit size={64} strokeWidth={1.5}/>,
    label:"AI Analysis",
    description:"Our advanced AI processes and analyzes your document instantly"
  },
  {
    id:3,
    icon:<FileOutput size={64} strokeWidth={1.5}/>,
    label:"Get Summary",
    description:"Receive a clear, concise summary of your document"
  }
]

const HowitWorksSection = () => {
  return (
    <section id='howItworks' className='relative bg-gray-50'>
      <div className='py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'> 
      {/* <div
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
        
      </div> */}

      <div className='text-center mb-16 '>
          <h2 className='font-bold text-lg uppercase mb-4 text-green-500'>
            How it works
          </h2>
          <h3 className='font-bold text-xl lg:text-2xl max-w-2xl mx-auto'>
          Transform any PDF into an easy-to-digest summary in three simple
          steps
          </h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative'>
          {steps.map((step)=>(<StepItem key={step.id} {...step} />))}
      </div>
      
      </div>

      
    </section>
  )
}

function  StepItem({icon , description , label}:Step){
  return(
    <div className='relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-green-400/50 transition-colors group w-full'>
      <div className='flex flex-col gap-4 h-full'>
        <div className='flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br from-green-500/10 to-transparent group-hover:from-green-500/20 transition-colors text-green-400'>{icon}</div>
        <div className='flex justify-between flex-col flex-1 gap-1'>
          <h4 className='text-center font-bold text-xl'>
            {label}
          </h4>
          <p className='text-center text-gray-600 font-semibold'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowitWorksSection
