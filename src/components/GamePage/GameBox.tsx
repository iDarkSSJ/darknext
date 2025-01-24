"use client"

import Image from "next/image"
import GameHeader from "./GameHeader"
import GameFooter from "./GameFooter"

export default function GameBox() {
  const isPaused = true
  // Maneja el tiempo de juego
  // useEffect(() => {
  //   let interval: NodeJS.Timeout
  //   if (!isPaused) {
  //     interval = setInterval(() => {
  //       setPlayTime((prev) => prev + 1)
  //     }, 1000)
  //   }
  //   return () => clearInterval(interval)
  // }, [isPaused])

  return (
    <div className="bg-gradient-to-l from-[#232323] to-[#343434] border-4 flex flex-col">
      <GameHeader />

      <div className="relative aspect-video bg-black">
        {isPaused && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="text-2xl font-bold text-white">JUEGO PAUSADO</div>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg"
            alt="Game Screen"
            width={800}
            height={600}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <GameFooter />
    </div>
  )
}
