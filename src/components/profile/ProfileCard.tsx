import { Button } from "../ui/button";

export default function ProfileCard() {
  return (
    <article className="border-r-4 py-6 px-8 shadow-[inset_-20px_20px_0px_-15px_#535353]">
      <h2 className="text-lg border-b-4 p-2">Profile</h2>
      <div className="flex flex-col gap-4 p-6">
        <div className="grid gap-2">
          <p className="font-medium"> - Username</p>
          <p className="text-xs">user2126</p>
        </div>
        <div className="grid gap-2">
          <p className="font-medium"> - Email</p>
          <p className="text-xs">user2126@gmail.com</p>
        </div>
        <div className="grid gap-2">
          <p className="font-medium"> - Joined</p>
          <p className="text-xs">September 16, 2024 at 3:22 PM</p>
        </div>
        <Button
          variant="outline"
          className="w-full bg-white text-black hover:bg-gray-300 tracking-tighter">
          Edit Profile
        </Button>
      </div>
    </article>
  )
}
