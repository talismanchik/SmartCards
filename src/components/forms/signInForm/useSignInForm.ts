import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type SignInFormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional().default(false),
})

export const useSignInForm = () => {
  const { control, handleSubmit } = useForm<SignInFormValues>({
    resolver: zodResolver(loginSchema),
  })

  return { control, handleSubmit }
}
