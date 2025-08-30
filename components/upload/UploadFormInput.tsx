'use client'
import { forwardRef } from "react";
import { Button } from "../ui/button"
import { Input } from "../ui/input";

interface UploadFormInputProps {
    onSubmit:(e :React.FormEvent<HTMLFormElement>)=> void;
}

export const UploadFormInput = forwardRef<HTMLFormElement, UploadFormInputProps>(({onSubmit}, formRef)=>{
   return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="flex items-center justify-center gap-2 mt-12">

        <Input name="file" type="file" id="file" accept="application/pdf" required className="w-[80%]"/>
        <Button className="w-[20%] bg-linear-to-r from-slate-900 to-green-400 hover:from-green-400 hover:to-slate-900 hover:no-underline shadow-lg transition-all duration-300 ">Upload</Button>

        </div>
    </form>
  )
})

UploadFormInput.displayName = 'UploadFormInput'
export default UploadFormInput
// export default function UploadFormInput({onSubmit}:UploadFormInputProps) {
 
// }
