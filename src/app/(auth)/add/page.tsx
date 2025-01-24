"use client"
import RomForm from "@/components/add/RomForm"
import { useNewRomStore } from "@/stores/newRomStore"
import Image from "next/image"

export default function CustomForm() {
  const { title, cover } = useNewRomStore()

  return (
    <main className="w-full grid md:grid-cols-2 grid-cols-1 p-6 md:p-12 items-center gap-6 md:gap-12">
      <RomForm />
      <div className="transition-all delay-[350ms] duration-[400ms] w-full md:w-2/3 mx-auto">
        <div className="relative bg-black aspect-square">
          <Image
            className="w-full h-full object-cover object-center"
            src={
              cover
                ? URL.createObjectURL(cover)
                : "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg"
            }
            alt={title || "Placeholder Image"}
            width={390}
            height={240}

          />
          <div>
            <div className="absolute text-base sm:text-lg md:text-xl bottom-0 left-0 text-start p-4 md:p-6 w-full bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-500">
              <span className="text-pretty truncate block">
                {title || "Default Title"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
