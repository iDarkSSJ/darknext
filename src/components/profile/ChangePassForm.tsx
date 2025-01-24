"use client"
import InputControlled from "@/components/InputControlled"
import { Form, FormLabel } from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"

const loginSchema = z.object({
  current_password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  new_password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirm_password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function ChangePassForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
  })

  function onSubmit(values: LoginFormValues) {
    console.log(values)
  }

  return (
    <article className="py-6 px-8 shadow-[inset_-20px_20px_0px_-15px_#535353]">
      <h2 className="text-lg border-b-4 p-2">Security</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          <InputControlled
            form={form}
            className="bg-transparent border-gray-400"
            name="current_password">
            <FormLabel>Current Password</FormLabel>
          </InputControlled>
          <InputControlled
            className="bg-transparent border-gray-400"
            form={form}
            name="new_password"
            type="password">
            <FormLabel>New Password</FormLabel>
          </InputControlled>
          <InputControlled
            className="bg-transparent border-gray-400"
            form={form}
            name="confirm_password"
            type="password">
            <FormLabel>Confirm Password</FormLabel>
          </InputControlled>
          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-300 tracking-tighter">
            Update Password
          </Button>
        </form>
      </Form>
    </article>
  )
}
