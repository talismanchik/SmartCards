import { ReactNode } from 'react'

import { ControlledCheckbox } from '@/components/controlled/controlledCheckbox/controlledCheckbox'
import { ControlledInput } from '@/components/controlled/controlledInput'
import { SignUpFormValues, useSignInForm } from '@/components/forms/signIn/useSignInForm'
import { Button } from '@/components/ui/button'

import s from './signInForm.module.scss'

type Props = {
  children?: ReactNode
  className?: string
  onSubmitForm: (data: SignUpFormValues) => void
}
export const SignInForm = ({ children, className, onSubmitForm }: Props) => {
  const { control, handleSubmit } = useSignInForm()

  const onSubmit = handleSubmit(data => {
    onSubmitForm(data)
  })

  return (
    <form className={`${s.form} ${className}`} onSubmit={onSubmit}>
      <ControlledInput control={control} label={'Email'} name={'email'} />
      <ControlledInput
        control={control}
        label={'Password'}
        name={'password'}
        variant={'eyeDecoration'}
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
