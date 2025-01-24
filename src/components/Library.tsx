"use client"
import { Carousel, CarouselApi, CarouselContent } from "./ui/carousel"
import GameList from "./GameList"
import { useEffect, useState } from "react"

interface game {
  user_id: string
  shell_id:string
  shell_name: string
  shell_core: "fceumm" | "snes9x" | "mgba" | "genesis_plus_gx"
  shell_rom_url: string
  shell_rom_public_id: string
  shell_cover_url: string
  shell_cover_public_id: string
}

type Props = {
  games: game[]
}

export default function Library({ games }: Props) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <main className="p-6 w-full flex flex-col">
      <h1>Library</h1>
      <div className="py-2 text-center text-sm">
        {current}/{count}
      </div>
      <section className="py-8 w-full">
        <Carousel opts={{ containScroll: false }} setApi={setApi}>
          <CarouselContent className="min-h-[500px]">
            <GameList gameList={games} />
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  )
}
