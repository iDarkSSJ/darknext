"use server"

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE

if (!supabaseUrl || !supabaseServiceRole) {
  throw new Error("Missing Supabase configuration")
}

// Client for general operations
const supabase = createClient(supabaseUrl, supabaseServiceRole, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

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

export const getUserGames = async (user_id: string): Promise<game[]> => {
  const { data, error } = await supabase.from("shells").select().eq("user_id", user_id)

  if (error) {
    console.error(error)
    return []
  }

  return data || []
}