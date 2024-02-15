import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './signUpForm.module.scss'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  })

  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type Props = {
  className?: string
}

export const SignUpForm = ({ className }: Props) => {
  const {
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
      <Input
        className={s.confirmPassword}
        id={'confirmPassword'}
        label={'Confirm Password'}
        variant={'eyeDecoration'}
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      <Button className={s.button} fullWidth type={'submit'}>
        Sign Up
      </Button>
    </form>
  )
}
