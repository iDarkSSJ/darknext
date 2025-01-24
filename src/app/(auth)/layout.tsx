import NavBar from "@/components/NavBar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profile",
  description: "Account Settings",
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

