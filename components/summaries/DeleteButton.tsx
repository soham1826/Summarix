"use client";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useTransition } from "react";
import { deleteSummaryAction } from "@/actions/summary-actions";
import { toast } from "sonner";

interface DeleteButtonProps{
  summaryId:string;}

export default function DeleteButton({summaryId}:DeleteButtonProps) {
  const[open ,setOpen] = useState(false);
  const [isPending , startTransition] = useTransition();

  const handleDelete =  async()=>{
    startTransition(async()=>{
      const response  =  await deleteSummaryAction(summaryId)
      if(!response.success){
        toast.error("Failed to delete summary")
      }
  
      toast.success("Succesfully deleted the summary")
      setOpen(false);
    })
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="text-gray-400 bg-gray-50 border border-gray-200 hover:text-rose-600 hover:bg-rose-100  "
        >
          <Trash2 className="w-4 h-4 " />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Summary</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this summary?{" "} This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
        <Button
          onClick={()=>setOpen(false)}
          variant={'ghost'}
          className="rounded-sm px-5 bg-gray-50 border border-gray-200 hover:bg-gray-100"
        >
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          variant={'destructive'}
          className="rounded-sm px-5 bg-green-500 hover:bg-green-600"
        >
          {isPending ? 'Deleting... ' : "Delete"}
        </Button>
      </DialogFooter>
      </DialogContent>
      
    </Dialog>
  );
}
