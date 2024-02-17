import { SignUpForm } from '@/components/forms/signUpForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './signUp.module.scss'

// type Props = {
//   onSubmit?: (data: SignUpFormValues) => void
// }

export const SignUp = () => {
  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Sign Up
      </Typography>
      <SignUpForm />
      <div className={s.footer}>
        <Typography className={s.footerTitle} variant={'body2'}>
          Already have an account?
        </Typography>
        <Typography as={'a'} className={s.signIn} href={'#'} variant={'subtitle1'}>
          Sign In
        </Typography>
      </div>
    </Card>
  )
}
