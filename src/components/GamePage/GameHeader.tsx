"use client"
import { Clock, Cloud } from "../Icons"

export default function GameHeader() {
  // const [playTime, setPlayTime] = useState(0) // tiempo en segundos
  // const [autoSaveTime, setAutoSaveTime] = useState("2m 59s")

  // const formatPlayTime = (seconds: number) => {
  //   const hours = Math.floor(seconds / 3600)
  //   const minutes = Math.floor((seconds % 3600) / 60)
  //   const secs = seconds % 60
  //   return `${hours ? `${hours}h ` : ""}${minutes}m ${secs}s`
  // }

  return (
    <div className="p-4 flex items-center justify-between border-b-4 bg-[#535353] 2xl:min-w-[1200px]">
      <div className="flex items-center gap-4 overflow-hidden">
        <h1 className="truncate max-w-[200px] md:max-w-[300px] 2xl:md:max-w-[500px] text-xl text-white">
          Sonic 3
        </h1>
        <span className="text-xs animate-crtTextShadowDf crtTextShadowBlue text-cyan-400 flex items-center gap-2">
          <Clock /> time
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm">Autosave: time</span>
        <span>
          <Cloud />
        </span>
      </div>
    </div>
  )
}
