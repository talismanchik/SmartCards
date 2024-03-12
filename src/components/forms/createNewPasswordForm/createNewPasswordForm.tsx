import { ReactNode } from 'react'

import { useCreateNewPasswordForm } from '@/components/forms/createNewPasswordForm/useCreateNewPasswordForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import s from './createNewPasswordForm.module.scss'

type Props = {
  children?: ReactNode
  className?: string
  onSubmitForm: (data: { password: string }) => void
}
export const CreateNewPasswordForm = ({ children, className, onSubmitForm }: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useCreateNewPasswordForm()

  const onSubmit = handleSubmit(data => {
    onSubmitForm(data)
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
