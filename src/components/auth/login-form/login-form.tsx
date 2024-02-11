import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './login-form.module.scss'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional().default(false),
})

export const LoginForm = () => {
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
    <form onSubmit={onSubmit}>
      <Input id={'email'} label={'email'} {...register('email')} error={errors.email?.message} />
      <Input
        id={'password'}
        label={'password'}
        variant={'eyeDecoration'}
        {...register('password')}
        error={errors.password?.message}
      />
      <ControlledCheckbox control={control} label={'rememberMe'} name={'rememberMe'} />
      <Button className={s.button} fullWidth type={'submit'}>
        Submit
      </Button>
    </form>
  )
}
