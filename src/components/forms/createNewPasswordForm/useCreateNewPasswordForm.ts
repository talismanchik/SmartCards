import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type CreateNewPasswordFormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  password: z.string().min(3),
})

export const useCreateNewPasswordForm = () => {
  const { control, formState, handleSubmit, register } = useForm<CreateNewPasswordFormValues>({
    resolver: zodResolver(loginSchema),
  })

  return { control, formState, handleSubmit, register }
}
