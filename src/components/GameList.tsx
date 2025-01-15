"use client"

import Image from "next/image"
import { CarouselItem, CarouselOnSnap, CarouselScrollTo } from "./ui/carousel"
import { Button } from "./ui/button"

type gameListProps = {
  id: number
  title: string
  image: string
}

type GameListProps = {
  gameList: gameListProps[]
}

function GameList({ gameList }: GameListProps) {
  const gameListNode = gameList.map((game, index) => (
    <CarouselItem
      key={game.id}
      className={({ selectedSnap }) =>
        `transition-all delay-[350ms] duration-[400ms] ${
          selectedSnap === index ? "basis-1/3" : "basis-1/5"
        }`
      }>
      <CarouselScrollTo index={index} className="relative">
        <Image
          className="w-full"
          src={game.image}
          alt={game.title}
          width={390}
          height={240}
        />
        <CarouselOnSnap index={index}>
          <div className="absolute xl:text-xl lg:text-sm bottom-0 left-0 text-start p-4 px-6 pt-10 pointer-events-none w-full bg-gradient-to-t from-black/65 to-transparent transition-opacity duration-500">
            <span className="text-pretty">{game.title}</span>
          </div>
        </CarouselOnSnap>
      </CarouselScrollTo>
      <CarouselOnSnap index={index}>
        <Button className="rounded-none bg-sky-600 border-sky-200 border-4 m-0 w-full p-6 text-lg hover:bg-sky-800">
          Play
        </Button>
      </CarouselOnSnap>
    </CarouselItem>
  ))

  return <>{gameListNode}</>
}

export default GameList
