import { useSignUpForm } from '@/components/forms/signUpForm/useSignUpForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import s from './signUpForm.module.scss'

// type Props = {
//   onSubmit?: (data: SignUpFormValues) => void
// }

export const SignUpForm = () => {
  const { errors, handleSubmit, register } = useSignUpForm()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <Input
        className={s.email}
        label={'Email'}
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        className={s.password}
        label={'Password'}
        variant={'eyeDecoration'}
        {...register('password')}
        error={errors.password?.message}
      />
      <Input
        className={s.confirmPassword}
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
