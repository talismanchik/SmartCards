import { NavLink, useNavigate } from 'react-router-dom'

import { ForgotPasswordForm } from '@/components/forms/forgotPasswordForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { sendEmailMessage } from '@/pages/auth/forgotPasswordPage/sendEmailMessage'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service'

import s from './forgotPasswordPage.module.scss'

export const ForgotPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()
  const onSubmitForm = async (data: { email: string }) => {
    recoverPassword({ email: data.email, html: sendEmailMessage })
    navigate('/check-email', { state: { email: data.email } })
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Forgot your password?
      </Typography>
      <ForgotPasswordForm onSubmitForm={onSubmitForm}>
        <div className={s.forgotPasswordPage}>
          <Typography className={s.info} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
        </div>
      </ForgotPasswordForm>
      <div className={s.footer}>
        <Typography className={s.footerTitle} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <NavLink className={s.tryLoggingIn} to={'/login'}>
          <Typography variant={'subtitle1'}>Try logging in</Typography>
        </NavLink>
      </div>
    </Card>
  )
}
