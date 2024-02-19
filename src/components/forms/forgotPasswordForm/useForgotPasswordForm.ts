import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type ForgotPasswordFormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
})

export const useForgotPasswordForm = () => {
  const { control, formState, handleSubmit, register } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(loginSchema),
  })

  return { control, formState, handleSubmit, register }
}
