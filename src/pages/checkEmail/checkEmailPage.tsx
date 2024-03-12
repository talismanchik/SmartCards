import { CheckEmail } from '@/assets/checkEmail/checkEmail'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './checkEmailPage.module.scss'

export const CheckEmailPage = () => {
  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Check Email
      </Typography>
      <CheckEmail />
      <Typography as={'a'} className={s.info} href={''} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button className={s.button} fullWidth>
        Back to Sign In
      </Button>
    </Card>
  )
}
