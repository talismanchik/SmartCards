import { ForgotPasswordForm } from '@/components/forms/forgotPasswordForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './forgotPasswordPage.module.scss'

export const ForgotPasswordPage = () => {
  const onSubmitForm = (data: { email: string }) => {
    console.log(data)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Forgot your password?
      </Typography>
      <ForgotPasswordForm onSubmitForm={onSubmitForm}>
        <div className={s.forgotPasswordPage}>
          <Typography as={'a'} className={s.info} href={''} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
        </div>
      </ForgotPasswordForm>
      <div className={s.footer}>
        <Typography className={s.footerTitle} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Typography as={'a'} className={s.tryLoggingIn} href={''} variant={'subtitle1'}>
          Try logging in
        </Typography>
      </div>
    </Card>
  )
}
