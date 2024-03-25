import { NavLink } from 'react-router-dom'

import { SignUpForm } from '@/components/forms/signUpForm'
import { SignUpFormValues } from '@/components/forms/signUpForm/useSignUpForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useSignUpMutation } from '@/services/auth/auth.service'

import s from './signUp.module.scss'

export const SignUp = () => {
  const [signUp] = useSignUpMutation()
  const onSubmitFormHandler = (data: SignUpFormValues) => {
    const { confirmPassword, ...newData } = data

    signUp(newData)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Sign Up
      </Typography>
      <SignUpForm onSubmitForm={onSubmitFormHandler} />
      <div className={s.footer}>
        <Typography className={s.footerTitle} variant={'body2'}>
          Already have an account?
        </Typography>
        <NavLink className={s.signIn} to={'/login'}>
          <Typography variant={'subtitle1'}>Sign In</Typography>
        </NavLink>
      </div>
    </Card>
  )
}
