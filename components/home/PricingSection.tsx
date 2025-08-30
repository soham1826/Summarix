import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const plans:plan[] = [{
  id:'basic',
  name:"Basic",
  price:9,
  items:['5 PDF summaries per month',
    'Standard processing speed',
    'Email support'],
  description:'Perfect for occasional use',
  paymentLink:'https://buy.stripe.com/test_4gM5kF8Za0Nb5w7eTcbV600',
  priceId:''

},
{
 id:'pro',
 name:'Pro',
 price:19,
 items: [
  'Unlimited PDF summaries' ,
  'Priority processing' ,
  '24/7 priority support' ,
  'Markdown Export' ,
 ],
 description:'For professionals and teams',
 paymentLink:"https://buy.stripe.com/test_00w9AVdfqfI5e2D7qKbV601",
 priceId:''
}
]

type plan = {
  id:string,
  name:string,
  items:string[],
  description:string,
  price:number,
  paymentLink:string
  priceId:''

}

const PricingCard =  ({
  name , price , description , items , id , paymentLink , priceId
}:plan) =>{
  return(
    <div key={id} className='w-full relative max-w-lg hover:scale-105 hover:transition-all duration-300 '>
      <div className= {cn('relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl' , id=== 'pro' && 'border-green-500 gap-5 border-2' )}>

      <div className='flex justify-between items-center gap-4'>
        <div>
        <p className='text-lg lg:text-xl font-bold capitalize'>{name}</p>
        <p className='text-base-content/80 mt-2'>{description}</p>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <p className = 'text-5xl tracking-tight font-extrabold'>${price}</p>
        <div>
          <p className='text-xs uppercase font-semibold'>USD</p>
          <p className='text-xs'>Month</p>
        </div>
      </div>
      <div className='space-y-2.5 leading-relaxed text-base flex-1'>
        {items.map((item,idx)=>(<li key={idx}>{item}</li>))}
      </div>
      <div className='flex space-y-2 justify-center w-full'>
        <Link className='w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-slate-900 to-green-400 hover:from-green-400 hover:to-slate-900 hover:no-underline shadow-lg transition-all duration-300 text-white py-2 ' href={paymentLink}>Buy now
        <ArrowRight className=' text-sm'/>
        </Link>
      </div>
      </div>
    </div>
  )
}

const PricingSection = () => {
  return (
    <section id='pricing'>
       <div className='py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center'>
        <h2 className='font-bold text-lg uppercase mb-4 text-green-500'>
            Pricing
          </h2>
        </div>
        <div className='relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8 '>
        {plans.map((plan)=>(
          <PricingCard key={plan.id} {...plan}/>
        ))}
        </div>
        
        </div> 
    </section>
  )
}

export default PricingSection
