import NavLink from './NavLink';
import Link from 'next/link';
import React from 'react'
import { FileText } from 'lucide-react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
const Header = () => {
  return (
    <nav className='container flex justify-between items-center py-4 lg:px-8 px-2 mx-auto'>
        <div className='flex lg:flex-1'>
            <Link href="/" className='flex items-center gap-1 shrink-0'>
            <FileText className='w-5 h-5 lg:w-8 lg:h-8  text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out'/>
            
            <span className='font-extrabold'>Summary Maker</span>
            
            </Link>
        </div>

        <div className='flex lg:justify-center gap-4 lg:gap-12 lg:items-center'>
            <NavLink href="/#pricing">Pricing</NavLink>
            <SignedIn>
                <NavLink href="/dashboard">Your Summaries</NavLink>
            </SignedIn>
            
            
        </div>
        <div className='flex lg:justify-end lg:flex-1'>
            <SignedIn>
            <div className='flex gap-2 items-center'>
                <NavLink href="/upload"> Upload a PDF</NavLink>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </div> 

            </SignedIn>
        <SignedOut>
            <NavLink href="/sign-in">Sign In</NavLink>
        </SignedOut>
            

            
        </div>
    </nav>
  )
}

export default Header
