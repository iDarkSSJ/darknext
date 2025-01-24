import { Metadata } from "next"

type Props = {
  params: Promise<{id: string}>
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id

  return {
    title: `${id}`,
  }
}

export default async function RoomPageLayout({ children }: Props) {
  return (
    <div className="flex flex-col flex-grow">
      {children}
    </div>
  )
}
