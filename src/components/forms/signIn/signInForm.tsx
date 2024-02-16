import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './signInForm.module.scss'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional().default(false),
})

type Props = {
  children?: ReactNode
  className?: string
}
export const SignInForm = ({ children, className }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form className={`${s.form} ${className}`} onSubmit={onSubmit}>
      <Input
        className={s.email}
        id={'email'}
        label={'Email'}
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        className={s.password}
        id={'password'}
        label={'Password'}
        variant={'eyeDecoration'}
        {...register('password')}
        error={errors.password?.message}
      />
      <ControlledCheckbox
        className={s.rememberMe}
        control={control}
        label={'Remember me'}
        name={'rememberMe'}
      />
      {children}
      <Button className={s.button} fullWidth type={'submit'}>
        Sign In
      </Button>
    </form>
  )
}
