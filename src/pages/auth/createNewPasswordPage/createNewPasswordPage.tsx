import { useNavigate, useParams } from 'react-router-dom'

import { CreateNewPasswordForm } from '@/components/forms/createNewPasswordForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useCreateNewPasswordMutation } from '@/services/auth/auth.service'

import s from './createNewPasswordPage.module.scss'

export const CreateNewPasswordPage = () => {
  const { token } = useParams<{ token: string }>()
  const navigate = useNavigate()
  const [createNewPassword] = useCreateNewPasswordMutation()

  const onSubmitForm = async (data: { password: string }) => {
    if (token) {
      await createNewPassword({ password: data.password, token })
      navigate('/login')
    }
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Create new password
      </Typography>
      <CreateNewPasswordForm onSubmitForm={onSubmitForm}>
        <div className={s.createNewPasswordPage}>
          <Typography as={'a'} className={s.info} href={''} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
        </div>
      </CreateNewPasswordForm>
    </Card>
  )
}
