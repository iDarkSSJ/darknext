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

export const submitGameDb = async (GameValues: {
  shell_name: string
    shell_core: "fceumm" | "snes9x" | "mgba" | "genesis_plus_gx"
    shell_rom_url: string
    shell_rom_public_id: string
    shell_cover_url: string
    shell_cover_public_id: string
}) => {
  // const { shell_name, shell_core, shell_rom_url, shell_rom_public_id, shell_cover_url, shell_cover_public_id} = GameValues

  const { data } = await supabase.from("shells").insert(GameValues).select()

  if (!data) {
    return { success: false }
  }

  return { success: true }

} 