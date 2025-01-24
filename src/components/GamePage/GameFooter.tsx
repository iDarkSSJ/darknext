import React, { useState } from "react"
import { Button } from "../ui/button"
import { Load, Save, Stop } from "../Icons"

export default function GameFooter() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="grid md:grid-cols-2 gap-4 p-2 items-center">
      <div className="flex justify-center md:justify-start">
        <Button
          variant="ghost"
          size="lg"
          onClick={() => setIsPaused(!isPaused)}
          className="rounded-none bg-sky-600 border-sky-200 border-4 m-0 p-6 text-lg hover:bg-sky-800 w-auto hover:text-zinc-300">
          {isPaused ? "Resume" : "Pause"}
        </Button>
      </div>

      <div className="flex justify-end gap-2">
        <Button
          variant="ghost"
          className="rounded-none text-white-300 bg-sky-600 border-sky-200 border-4 hover:bg-gray-700 hover:text-green-500">
          <Save />
          Save
        </Button>
        <Button
          variant="ghost"
          className="rounded-none text-white-300 bg-sky-600 border-sky-200 border-4 hover:bg-gray-700 hover:text-green-500">
          <Load />
          Load
        </Button>
        <Button
          variant="ghost"
          className="rounded-none text-white-300 bg-sky-600 border-sky-200 border-4 hover:bg-gray-700 hover:text-green-500">
          <Stop /> Reset
        </Button>
      </div>
    </div>
  )
}
