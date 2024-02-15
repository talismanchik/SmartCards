import { useSignUpForm } from '@/components/forms/signUp/useSignUpForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import s from './signUpForm.module.scss'

type Props = {
  className?: string
}

export const SignUpForm = ({ className }: Props) => {
  const { errors, handleSubmit, register } = useSignUpForm()

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
