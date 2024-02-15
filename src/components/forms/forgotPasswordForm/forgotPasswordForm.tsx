import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgotPasswordForm.module.scss'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
})

type Props = {
  children?: ReactNode
  className?: string
}
export const ForgotPasswordForm = ({ children, className }: Props) => {
  const {
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form className={`${s.form} ${className}`} onSubmit={onSubmit}>
      <Input className={s.email} error={errors.email?.message} id={'email'} label={'Email'} />
      {children}
      <Button className={s.button} fullWidth type={'submit'}>
        Send Instructions
      </Button>
    </form>
  )
}
