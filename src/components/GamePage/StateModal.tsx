"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"

export default function StateModal() {
  const [isOpen, setIsOpen] = useState(true)

  const slots = Array.from({ length: 6 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i) // Add i days to the current date

    return (
      <button
        key={i}
        className="flex flex-col bg-zinc-500 hover:bg-zinc-400 transition-colors overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src="https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg"
            alt={`Slot ${i + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-2 text-start">
          <span className="block font-bold text-white">{i + 1}</span>
          <span className="block text-sm text-zinc-300">
            {date.toLocaleDateString()}
          </span>
        </div>
      </button>
    )
  })

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-screen max-w-full sm:max-w-full p-0 border-none rounded-none">
        <div className="w-full bg-gradient-to-l from-[#232323] to-[#343434] py-8 border-y-4">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold mb-6 text-white">
              Select Slot to Save
            </DialogTitle>
          </DialogHeader>
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{slots}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
