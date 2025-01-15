import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"

type InputProps<FormValues extends FieldValues> = {
  name: Path<FormValues>
  form: UseFormReturn<FormValues>
  children?: React.ReactNode
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form'>

function InputControlled<FormValues extends FieldValues>({
  name,
  form,
  children,
  ...props
}: InputProps<FormValues>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {children && <FormLabel>{children}</FormLabel>}
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
          <FormMessage className="crtTextShadowRed" />
        </FormItem>
      )}
    />
  )
}

export default InputControlled
