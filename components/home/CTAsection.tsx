import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
const CTAsection = () => {
  return (
   <section className='relative bg-gray-50'>
      <div className='py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center gap-3'> 
        <h2 className='text-3xl md:text-4xl font-bold'>
          Ready to Save Hours of Reading Time ? 
        </h2>
        <p className='text-sm md:text-md text-gray-500'>Transform the lengthy documents into clear,actionable insights with our AI powered summarizer</p>

        <Link className='w-auto rounded-md flex items-center justify-center gap-2 bg-linear-to-r from-slate-900 to-green-400 hover:from-green-400 hover:to-slate-900 hover:no-underline shadow-lg transition-all duration-300 text-white py-2 px-4 text-sm ' href="/#pricing">Get Started

        <ArrowRight className=' text-sm'/>
        </Link>

        </div>
    </section>
  )
}

export default CTAsection
