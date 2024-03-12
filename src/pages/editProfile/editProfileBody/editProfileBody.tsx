import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import {
  ChangeNameValues,
  ChangeNickNameForm,
} from '@/pages/editProfile/editProfileBody/form/changeNickNameForm'
import { useLogOutMutation, useUpdateProfileMutation } from '@/services/auth/auth.service'

import s from '../profile.module.scss'

type Props = {
  userEmail?: string
  userName?: string
}
export const EditProfileBody = ({ userEmail, userName }: Props) => {
  const [updateProfile] = useUpdateProfileMutation()
  const [editNickName, setEditNickName] = useState(false)
  const [logOut] = useLogOutMutation()

  const onChangeNickName = (data: ChangeNameValues) => {
    if (userName !== data.name) {
      updateProfile(data)
    }
    setEditNickName(false)
  }

  if (editNickName) {
    return <ChangeNickNameForm defaultName={userName} onSubmitForm={onChangeNickName} />
  }

  return (
    <div className={s.bodyContainer}>
      <span className={s.userNameBlock}>
        <Typography variant={'h2'}>{userName}</Typography>
        <button className={s.buttonIcon} onClick={() => setEditNickName(true)}>
          <Icon iconId={'edit_outline'} />
        </button>
      </span>

      <Typography className={s.userEmailBlock} variant={'body2'}>
        {userEmail}
      </Typography>
      <Button onClick={() => logOut()} variant={'secondary'}>
        <Icon iconId={'log_out'} />
        <Typography variant={'subtitle2'}>Logout</Typography>
      </Button>
    </div>
  )
}
