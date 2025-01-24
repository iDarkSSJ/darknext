"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormLabel } from "@/components/ui/form"
import InputControlled from "@/components/InputControlled"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { signIn } from "next-auth/react"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function handleSubmit(values: LoginFormValues) {
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    })
    if (result?.error) {
      setError(result.error)
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <main className="flex items-center justify-center bg-pixel-bg bg-cover bg-left-bottom bg-fixed w-full">
      <div className="w-full max-w-md p-8 space-y-4 bg-zinc-800 shadow-xl shadow-black border-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6">
            <InputControlled
              form={form}
              className="bg-transparent border-gray-400"
              name="email"
              type="email"
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
            {error && <p>{error}</p>}
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-300">
              Login
            </Button>
          </form>
        </Form>
        <p className="text-sm text-center">
          New here?{" "}
          <Link className="text-blue-500 crtTextShadowBlue" href={"/register"}>
            Create an account
          </Link>
        </p>
      </div>
    </main>
  )
}
