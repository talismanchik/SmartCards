import { ReactNode } from 'react'

import { useForgotPasswordForm } from '@/components/forms/forgotPasswordForm/useForgotPasswordForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import s from './forgotPasswordForm.module.scss'

type Props = {
  children?: ReactNode
  className?: string
  onSubmitForm: (data: { email: string }) => void
}
export const ForgotPasswordForm = ({ children, className, onSubmitForm }: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForgotPasswordForm()

  const onSubmit = handleSubmit(data => {
    onSubmitForm(data)
  })

  return (
    <form className={`${s.form} ${className}`} onSubmit={onSubmit}>
      <Input
        className={s.email}
        error={errors.email?.message}
        {...register('email')}
        id={'email'}
        label={'Email'}
      />
      {children}
      <Button className={s.button} fullWidth type={'submit'}>
        Send Instructions
      </Button>
    </form>
  )
}
