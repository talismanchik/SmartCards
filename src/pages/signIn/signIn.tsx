import { SignUpFormValues } from '@/components/forms/signInForm/useSignInForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './signIn.module.scss'

import { SignInForm } from '../../components/forms/signInForm'

export const SignIn = () => {
  const submitForm = (data: SignUpFormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Sign In
      </Typography>
      <SignInForm onSubmitForm={submitForm}>
        <div className={s.forgotPassword}>
          <Typography as={'a'} href={''} variant={'body2'}>
            Forgot Password?
          </Typography>
        </div>
      </SignInForm>
      <div className={s.footer}>
        <Typography className={s.footerTitle} variant={'body2'}>
          Don&apos;t have an account?
        </Typography>
        <Typography as={'a'} className={s.signUp} href={''} variant={'subtitle1'}>
          Sign Up
        </Typography>
      </div>
    </Card>
  )
}
