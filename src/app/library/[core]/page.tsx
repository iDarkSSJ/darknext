import Library from "@/components/Library"
import { games } from "@/lib/types"

type Props = {
  params: {
    core: string
  }
}

async function corePage({ params }: Props) {
  const { core } = await params
  const filteredGames = games.filter((game) => game.core === core)

  return <Library games={filteredGames} />
}

export default corePage
