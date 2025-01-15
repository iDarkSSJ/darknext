import Link from "next/link"
import { Button } from "./ui/button"

function NavBar() {
  return (
    <nav className="bg-[#252525] text-gray-200 p-4 border-b-4 shadow-[inset_0px_-20px_0px_-15px_#555555]">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/Library"
            className="text-lg font-bold pixel-art text-[#00b800] text-shadow-none">
            Darkness
          </Link>
          <div>
            <Button
              variant="ghost"
              className="text-white hover:bg-transparent hover:text-zinc-400">
              <Link href={"/library"}>Library</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-transparent hover:text-zinc-400">
              <Link href={"/keybinds"}>Keybinds</Link>
            </Button>
          </div>
        </div>
        <div className="space-x-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-transparent hover:text-zinc-400">
            Add
          </Button>
          <Button
            variant="secondary"
            className="bg-slate-600 text-white rounded-none border-4 py-5 hover:bg-slate-300 hover:text-slate-500">
            Profile
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
