import { ControlledInput } from '@/components/controlled/controlledInput'
import { useSignUpForm } from '@/components/forms/signUpForm/useSignUpForm'
import { Button } from '@/components/ui/button'

import s from './signUpForm.module.scss'

// type Props = {
//   onSubmit?: (data: SignUpFormValues) => void
// }

export const SignUpForm = () => {
  const { control, handleSubmit } = useSignUpForm()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <ControlledInput control={control} label={'Email'} name={'email'} />
      <ControlledInput
        className={s.password}
        control={control}
        label={'Password'}
        name={'password'}
        variant={'eyeDecoration'}
      />
      <ControlledInput
        className={s.confirmPassword}
        control={control}
        label={'Confirm Password'}
        name={'confirmPassword'}
        variant={'eyeDecoration'}
      />
      <Button className={s.button} fullWidth type={'submit'}>
        Sign Up
      </Button>
    </form>
  )
}
