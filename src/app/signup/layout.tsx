import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup",
  description: "Signup page",
}

function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export default layout
