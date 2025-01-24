import Image from "next/image"
import { CarouselItem, CarouselOnSnap } from "./ui/carousel"
import Link from "next/link"

interface game {
  user_id: string
  shell_id: string
  shell_name: string
  shell_core: "fceumm" | "snes9x" | "mgba" | "genesis_plus_gx"
  shell_rom_url: string
  shell_rom_public_id: string
  shell_cover_url: string
  shell_cover_public_id: string
}

type GameListProps = {
  gameList: game[]
}

export default function GameList({ gameList }: GameListProps) {
  const gameListNode = gameList.map((game, index) => (
    <CarouselItem
      key={crypto.randomUUID()}
      index={index}
      className={`transition-all delay-[350ms] duration-[400ms] aspect-square`}>
      <div className="relative bg-black">
        <Image
          className="w-full h-full object-cover object-center"
          src={game.shell_cover_url}
          alt="cover"
          width={390}
          height={240}
        />
        <CarouselOnSnap index={index}>
          <div className="absolute xl:text-xl lg:text-sm bottom-0 left-0 text-start p-6 w-full bg-gradient-to-t from-black/65 to-transparent transition-opacity duration-500">
            <span className="text-pretty">{game.shell_name}</span>
          </div>
        </CarouselOnSnap>
      </div>
      <CarouselOnSnap index={index}>
        <Link
          href={`/rom/${game.shell_id}`}
          className="rounded-none bg-sky-600 border-sky-200 border-4 m-0 w-full p-0 text-lg hover:bg-sky-800 hover:text-white min-h-[3.5rem] flex items-center justify-center transition-colors">
          Start
        </Link>
      </CarouselOnSnap>
    </CarouselItem>
  ))

  return <>{gameListNode}</>
}
