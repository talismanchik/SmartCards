import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignInForm } from '@/components/forms/signInForm'
import { SignInFormValues } from '@/components/forms/signInForm/useSignInForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useLogInMutation } from '@/services/auth/auth.service'
import { ErrorResponse } from '@/services/auth/auth.types'

import s from './signIn.module.scss'

export const SignIn = () => {
  const [login] = useLogInMutation()
  const navigate = useNavigate()

  const submitLoginForm = async (data: SignInFormValues) => {
    try {
      await login(data).unwrap()
    } catch (e: unknown) {
      const err = e as ErrorResponse

      toast.error(err.data.message ?? 'Could not sign in')
    }
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Sign In
      </Typography>
      <SignInForm onSubmitForm={submitLoginForm}>
        <div className={s.forgotPassword}>
          <Typography
            as={'a'}
            className={s.forgotText}
            onClick={() => navigate('/forgot-password')}
            variant={'body2'}
          >
            Forgot Password?
          </Typography>
        </div>
      </SignInForm>
      <div className={s.footer}>
        <Typography className={s.footerTitle} variant={'body2'}>
          Don&apos;t have an account?
        </Typography>
        <NavLink className={s.signUp} to={'/signup'}>
          <Typography variant={'subtitle1'}>Sign Up</Typography>
        </NavLink>
      </div>
    </Card>
  )
}
