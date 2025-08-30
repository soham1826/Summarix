import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
        <div className="px-4 md:px-10 py-10 bg-gray-100">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col  gap-2">
              <Image className="w-[80px] h-[80px]  rounded-full border-gray-500 border-2 " width={200} height={200} alt="profilepic" src="/sohamPic.png"/>
              <p className="text-gray-500 text-sm">Made by <span className=" underline-offset-4 underline hover:text-green-400"><Link href={"https://github.com/soham1826"}>Soham</Link></span>🖤 </p>

              <p className="text-gray-500 text-xs mt-5"> &copy; 2025 Soham Kulkarni All Rights Reserved</p>
            </div>

            <div className=" flex flex-col md:flex-row gap-4 md:gap-10">
              <div className="flex flex-col text-sm md:text-md text-gray-500">
                <p className="text-gray-600 uppercase font-bold">Quick Links</p>
                <Link href={"/#hero"}>Home</Link>
                <Link href={"/#howItworks"}>How it Works</Link>
                <Link href={"/#pricing"}>pricing</Link>
                <Link href={"/sign-in"}>Sign In</Link>
              </div>

              <div className="flex flex-col text-sm md:text-md text-gray-500">
                <p className="text-gray-600 uppercase font-bold">Contact</p>
                <Link href={"https://sohamkulkarni.vercel.app/"}>Portfolio</Link>
                <Link href={"https://x.com/kulsoham18262"}>Twitter</Link>
                <Link href={"https://www.linkedin.com/in/soham-ashok-kulkarni/"}>LinkedIn</Link>
              </div>

              <div className="flex flex-col text-sm md:text-md text-gray-500">
                <p className="text-gray-600 uppercase font-bold">Other Projects</p>
                <Link href={"https://idlidu-ten.vercel.app/"}>Idldu</Link>
                <Link href={"https://promptopiaby-sk.vercel.app/"}>Promptopia</Link>
                <Link href={"https://i-phone15-website-eta.vercel.app/"}>IPhone-15 website</Link>
                <Link href={"https://youtu.be/k2gbuZcpiRU?si=9-SwxQZJeEXXRvsE"}>Happiness-Index -Predictor</Link>
              </div>

              
            </div>
            
          </div>
          
          </div>
    </footer>
  )
}

export default Footer
