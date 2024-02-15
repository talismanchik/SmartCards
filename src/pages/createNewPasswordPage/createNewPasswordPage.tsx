import { CreateNewPasswordForm } from '@/components/forms/createNewPasswordForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './createNewPasswordPage.module.scss'

export const CreateNewPasswordPage = () => {
  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Create new password
      </Typography>
      <CreateNewPasswordForm>
        <div className={s.createNewPasswordPage}>
          <Typography as={'a'} className={s.info} href={''} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
        </div>
      </CreateNewPasswordForm>
    </Card>
  )
}
