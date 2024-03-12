import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type SignUpFormValues = z.infer<typeof signUpSchema>

const signUpSchema = z
  .object({
    confirmPassword: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(3).max(30),
  })

  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export const useSignUpForm = () => {
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  })

  return { control, handleSubmit }
}
