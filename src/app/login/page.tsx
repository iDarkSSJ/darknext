"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormLabel } from "@/components/ui/form"
import InputControlled from "@/components/InputControlled"
import Link from "next/link"

const loginSchema = z.object({
  profile: z.string().min(3, {
    message: "Profile must be at least 3 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      profile: "",
      password: "",
    },
  })

  function onSubmit(values: LoginFormValues) {
    console.log(values)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-pixel-bg bg-cover bg-left-bottom">
      <div className="w-full max-w-md p-8 space-y-4 bg-zinc-800 shadow-xl shadow-black border-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <InputControlled
              form={form}
              className="bg-transparent border-gray-400"
              name="profile"
              placeholder="user123 or user@example.com">
              <FormLabel>Profile</FormLabel>
            </InputControlled>
            <InputControlled
              className="bg-transparent border-gray-400"
              form={form}
              name="password"
              placeholder="password"
              type="password">
              <FormLabel>Password</FormLabel>
            </InputControlled>
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-300">
              Login
            </Button>
          </form>
        </Form>
        <p className="text-sm text-center">
          New here?{" "}
          <Link className="text-blue-500 crtTextShadowBlue" href={"/signup"}>
            Create an account
          </Link>
        </p>
      </div>
    </main>
  )
}
