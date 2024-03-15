import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type SignUpFormValues = z.infer<typeof signUpSchema>

const signUpSchema = z
  .object({
    confirmPassword: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(3).max(30),
    sendConfirmationEmail: z.boolean(),
  })

  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
  .refine(data => {
    if (data.password === data.confirmPassword) {
      data.sendConfirmationEmail = true
    }

    return data
  })

export const useSignUpForm = () => {
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      sendConfirmationEmail: false,
    },
    resolver: zodResolver(signUpSchema),
  })

  return { control, handleSubmit }
}
