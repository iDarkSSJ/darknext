import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
}

function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export default layout
