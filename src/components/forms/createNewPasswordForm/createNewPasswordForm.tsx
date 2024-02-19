import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './createNewPasswordForm.module.scss'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  password: z.string().min(3),
})

type Props = {
  children?: ReactNode
  className?: string
  submit: (data: { password: string }) => void
}
export const CreateNewPasswordForm = ({ children, className, submit }: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(data => {
    submit(data)
  })

  return (
    <form className={`${s.form} ${className}`} onSubmit={onSubmit}>
      <Input
        className={s.password}
        id={'password'}
        label={'Password'}
        variant={'eyeDecoration'}
        {...register('password')}
        error={errors.password?.message}
      />
      {children}
      <Button className={s.button} fullWidth type={'submit'}>
        Create New Password
      </Button>
    </form>
  )
}
