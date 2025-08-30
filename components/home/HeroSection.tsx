import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section id='hero' className='relative flex flex-col items-center justify-center mx-auto py-16 sm-py-20 lg:pb-20 transition-all animate-in lg:px-12 max-w-7xl' >
      <div className='flex justify-center items-center flex-col text-center'>
        <div className='flex'>
            <Badge className='bg-white text-green-400 border-[1px] border-green-400 px-6 py-3  rounded-full animate-pulse'>
            <Sparkles className='h-6 w-6 mr-2 '/>
            <p>Powered By AI</p>
            </Badge>
        </div>
        
        <h1 className='font-bold text-4xl lg:text-6xl pt-6 pb-2 text-center'> 
        Transform PDF&apos;s  into {" "}
        <span className='relative inline-block'>
          
          <span className='relative z-10 px-2'>
            concise
          </span>
          <span className='absolute bg-green-200/50 inset-0 -rotate-2 rounded-lg transform -skew-y-1'  aria-hidden='true'></span>
        </span>{" "}
        summaries

        </h1>
        <h2 className='font-semibold text-gray-500 py-4 px-4 lg:text-xl text-lg '>Get a beauitful summary reel of your document in seconds</h2>
      
        <Button variant={'link'} className='text-white py-4 lg:py-6 text-sm  lg:text-md rounded-full bg-linear-to-r    from-slate-900 to-green-400 hover:from-green-400 hover:to-slate-900 hover:no-underline shadow-lg transition-all duration-300'>
          <Link href='#/pricing' className='flex gap-2 items-center'>
          <span>Try Summary maker</span>
          <ArrowRight className='animate-pulse'/>
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default HeroSection
