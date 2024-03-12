import { SignUpForm } from '@/components/forms/signUpForm'
import { SignUpFormValues } from '@/components/forms/signUpForm/useSignUpForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './signUp.module.scss'

// type Props = {
//   onSubmit?: (data: SignUpFormValues) => void
// }

export const SignUp = () => {
  const onSubmitFormHandler = (data: SignUpFormValues) => {
    console.log(data)
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
        <Typography as={'a'} className={s.signIn} href={'#'} variant={'subtitle1'}>
          Sign In
        </Typography>
      </div>
    </Card>
  )
}
