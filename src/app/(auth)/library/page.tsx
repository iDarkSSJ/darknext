/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { getUserGames } from "@/actions/getUserGames"
import Library from "@/components/Library"
import { useSession } from "next-auth/react"
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

export default function ShellsPage() {
  const [games, setGames] = useState<game[]>([])
  const { data: session } = useSession()

  const fetchUserGame = async () => {
    if (session?.user.id) {
      const userGames = await getUserGames(session.user.id)
      setGames(userGames)
    }
  }

  useEffect(() => {
    fetchUserGame()
  }, [session?.user.id])

  return <Library games={games} /> 
}
