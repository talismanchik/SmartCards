import { useNavigate } from 'react-router-dom'

import { SignUpForm } from '@/components/forms/signUpForm'
import { SignUpFormValues } from '@/components/forms/signUpForm/useSignUpForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useSignUpMutation } from '@/services/auth/auth.service'

import s from './signUp.module.scss'

export const SignUp = () => {
  const navigate = useNavigate()
  const [signUp] = useSignUpMutation()
  const onSubmitFormHandler = (data: SignUpFormValues) => {
    const { confirmPassword, ...newData } = data

    signUp(newData)
  }
  const navigateToSignIn = () => {
    navigate('/login')
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
        <Typography
          as={'a'}
          className={s.signIn}
          href={'#'}
          onClick={navigateToSignIn}
          variant={'subtitle1'}
        >
          Sign In
        </Typography>
      </div>
    </Card>
  )
}
