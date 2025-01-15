import NavBar from "@/components/NavBar"
import SideBar from "@/components/SideBar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Library",
  description: "Library page",
}

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex h-full grow">
        <SideBar />
        {children}
      </div>
    </div>
  )
}

export default layout
