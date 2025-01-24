import GameBox from "@/components/GamePage/GameBox"
import StateModal from "@/components/GamePage/StateModal"

export default function RomPage() {
  return (
    <main className="flex justify-center pt-8 bg-pixel-bg bg-fixed h-full w-full flex-grow">
      <section>
        <GameBox />
      </section>
      <StateModal />
    </main>
  )
}
