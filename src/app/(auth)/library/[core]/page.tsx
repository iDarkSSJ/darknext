import Library from "@/components/Library"
import { games } from "@/lib/types"

type Props = {
  params: Promise<{ core: string }> // Keep params as a Promise
}

async function corePage({ params }: Props) {
  const resolvedParams = await params // Await the Promise
  const { core } = resolvedParams
  const filteredGames = games.filter((game) => game.core === core)

  return <Library games={filteredGames} />
}

export default corePage
