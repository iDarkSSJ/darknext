"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import Link from "next/link"
import { CONSOLES } from "@/lib/types"

function SideBar() {
  const [collapsed, setCollapsed] = useState(false)

  const consoleList = CONSOLES.map((con, i) => (
    <li key={i}>
      <Button
        variant="ghost"
        className={`p-0 w-full justify-start text-left text-xs text-gray-300 hover:text-green-500 hover:bg-gray-700 ${
          collapsed && "hidden"
        }`}>
        <Link
          href={`/library/${con.path}`}
          className="w-full h-full flex items-center p-3">
          {con.label}
        </Link>
      </Button>
    </li>
  ))

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-gradient-to-l from-[#232323] to-[#343434] border-r-4 flex flex-col transition-all duration-150`}>
      <div className="flex items-center justify-between p-4 border-b-4 bg-[#535353]">
        {!collapsed && <h2 className={`text-xl`}>Consoles</h2>}
        <Button
          variant="ghost"
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-300 hover:bg-transparent hover:text-white p-0">
          <p className="text-xl">{collapsed ? "→" : "←"}</p>
        </Button>
      </div>
      <div
        className={`p-4 grow shadow-[inset_-20px_20px_0px_-15px_#535353] ${
          collapsed ? "overflow-hidden" : ""
        }`}>
        <nav>
          <ul>{consoleList}</ul>
        </nav>
      </div>
    </aside>
  )
}

export default SideBar
