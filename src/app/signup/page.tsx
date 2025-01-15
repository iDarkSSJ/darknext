"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormLabel } from "@/components/ui/form"
import InputControlled from "@/components/InputControlled"
import Link from "next/link"

const signupSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

type SignupFormValues = z.infer<typeof signupSchema>

export default function SignupPage() {
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(values: SignupFormValues) {
    console.log(values)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-pixel-bg bg-cover bg-left-bottom">
      <div className="w-full max-w-md p-8 space-y-4 bg-zinc-800 shadow-xl shadow-black border-4">
        <h1 className="text-2xl font-bold text-center">Create an Account</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <InputControlled
              form={form}
              className="bg-transparent border-gray-400"
              name="username"
              placeholder="user123 or user@example.com">
              <FormLabel>Username</FormLabel>
            </InputControlled>
            <InputControlled
              form={form}
              className="bg-transparent border-gray-400"
              name="email"
              placeholder="user123 or user@example.com">
              <FormLabel>Email</FormLabel>
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
          Already have an account?{" "}
          <Link className="text-blue-500 crtTextShadowBlue" href={"/login"}>
            Sign in
          </Link>
        </p>
      </div>
    </main>
  )
}
