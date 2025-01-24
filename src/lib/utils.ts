import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ACCEPTED_COVER_EXTENSIONS, ACCEPTED_ROM_EXTENSIONS, CoverExtension, EXTENSION_TO_CORE, RomExtension } from "./types"
import JSZip from "jszip"
import { getCloudinaryParams } from "@/actions/getCloudinaryParams"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const uploadToCloudinary = async (file: Blob, resourceType: "image" | "raw") => {
  try {
    const { signature, timestamp } = await getCloudinaryParams(resourceType)

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    if (!cloudName) {
      throw new Error("Cloud Name is not defined")
    }

    const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
    if (!apiKey) {
      throw new Error("API Key is not defined")
    }

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "roms_preset")
    formData.append("timestamp", timestamp.toString())
    formData.append("signature", signature)
    formData.append("api_key", apiKey)
    formData.append("folder", resourceType === "image" ? "covers" : "roms")

    if (resourceType === "image") {
      formData.append("eager", "c_scale,w_500,q_auto:good")
    }

    const response = await fetch(url, { method: "POST", body: formData })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Cloudinary upload failed: ${errorData.error.message}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Failed to upload file to Cloudinary:", error)
    throw error
  }
}


interface body {
  title: string
  cover: File
  rom: File
  user_id: string
}

interface gameInfo {
  shell_name: string
    shell_core: "fceumm" | "snes9x" | "mgba" | "genesis_plus_gx"
    shell_rom_url: string
    shell_rom_public_id: string
    shell_cover_url: string
    shell_cover_public_id: string
    user_id: string
}

export const uploadNewGame = async (body: body) => {
  const { title, cover, rom, user_id } = body
  let error = ""

  
  const romFileExtension = rom.name.split(".").pop() as RomExtension
  const coverFileExtension = cover.name.split(".").pop() as CoverExtension

  if (cover && !ACCEPTED_COVER_EXTENSIONS.includes(coverFileExtension)) {
    error = "Cover extension must be jpg, png, or jpeg."
    return { error }
  }

  if (!ACCEPTED_ROM_EXTENSIONS.includes(romFileExtension)) {
    error = "ROM extension must be nes, snes, gb, gba, gbc, sfc, smc, bin, smd, md, or gen."
    return { error }
  }

  const rom_core = EXTENSION_TO_CORE[romFileExtension]

  const zip = new JSZip()
  zip.file(crypto.randomUUID(), rom, {
    compression: "DEFLATE",
    compressionOptions: { level: 9 },
  })

  const zipBlob = await zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: { level: 9 },
  })

  const zipFile = new File([zipBlob], `${crypto.randomUUID()}`, { type: zipBlob.type })

  const romUploadResult = await uploadToCloudinary(zipFile, "raw")
  if (romUploadResult.error) {
    return { error: `ROM upload failed: ${romUploadResult.error}` }
  }

  let coverUploadResult = null

  if (cover) {
    const renamedFile = new File([cover], `${crypto.randomUUID()}.jpg`, {
      type: cover.type,
      lastModified: cover.lastModified,
    })

    coverUploadResult = await uploadToCloudinary(renamedFile, "image")
    if (coverUploadResult.error) {
      return { error: `Cover upload failed: ${coverUploadResult.error}` }
    }
  }

  const gameInfo: gameInfo = {
    user_id,
    shell_name: title,
    shell_core: rom_core,
    shell_rom_url: romUploadResult.secure_url,
    shell_rom_public_id: romUploadResult.public_id,
    shell_cover_url: coverUploadResult?.secure_url,
    shell_cover_public_id: coverUploadResult?.public_id,
  }

  return { success: true, gameInfo }
}
