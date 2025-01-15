import { Carousel, CarouselContent } from "./ui/carousel"
import GameList from "./GameList"
import { Game } from "@/lib/types"

type Props = {
  games: Game[]
}

function Library({ games }: Props) {
  return (
    <main className="p-6 w-full">
      <h1>Library</h1>
      <section className="py-8">
        <Carousel opts={{ containScroll: false }}>
          <CarouselContent className="min-h-[500px]">
            <GameList gameList={games} />
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  )
}

export default Library
