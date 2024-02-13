import { SignInForm } from '@/components/forms/signIn/signInForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './signIn.module.scss'

export const SignIn = () => {
  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Sign In
      </Typography>
      <SignInForm>
        <div className={s.forgotPassword}>
          <Typography as={'a'} variant={'body2'}>
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
