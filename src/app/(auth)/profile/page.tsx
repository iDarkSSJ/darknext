import ChangePassForm from "@/components/profile/ChangePassForm"
import ProfileCard from "@/components/profile/ProfileCard"
import SessionList from "@/components/profile/SessionList"

export default function ProfilePage() {
  return (
    <main className="flex justify-center py-8 bg-pixel-bg min-h-screen bg-fixed">
      <div className="flex flex-col bg-[#343434] border-4 w-full max-w-4xl">
        <h1 className="bg-[#535353] p-4 pl-8 text-2xl border-b-4">Account</h1>
        <section className="grid md:grid-cols-2">
          <ProfileCard />
          <ChangePassForm />
          <SessionList />
        </section>
      </div>
    </main>
  )
}
