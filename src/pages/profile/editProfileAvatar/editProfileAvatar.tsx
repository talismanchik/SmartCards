import { ChangeEvent, useRef } from 'react'

import defaultAvatar from '@/assets/user.png'
import { Icon } from '@/components/ui/icon/Icon'
import { InputFile } from '@/components/ui/inputFile'
import { useUpdateProfileMutation } from '@/services/auth/auth.service'
import clsx from 'clsx'

import s from '../profile.module.scss'

type Props = {
  avatar?: string
}

export const EditProfileAvatar = ({ avatar }: Props) => {
  const styles = {
    buttonEdit: clsx(s.buttonIcon, s.buttonEditAvatar),
    buttonTrash: clsx(s.buttonIcon, s.buttonTrashAvatar),
  }
  const [updateAvatar] = useUpdateProfileMutation()
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const onClickChangeAvatar = () => {
    fileInputRef.current?.click()
  }
  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const newAvatar = e.target.files?.[0]
    const formData = new FormData()

    newAvatar && formData.append('avatar', newAvatar)
    updateAvatar(formData).unwrap()
  }
  const onDeleteAvatar = () => {
    const formData = new FormData()

    formData.append('avatar', '')
    updateAvatar(formData).unwrap()
  }

  return (
    <div className={s.avatarContainer}>
      <img alt={'User avatar'} className={s.avatar} src={avatar ?? defaultAvatar} />
      <button className={styles.buttonEdit} onClick={onClickChangeAvatar}>
        <InputFile handleFileChange={onChangeAvatar} ref={fileInputRef} />
        <Icon iconId={'edit_outline'} />
      </button>
      <button className={styles.buttonTrash} onClick={onDeleteAvatar}>
        <Icon iconId={'trash_outline'} />
      </button>
    </div>
  )
}
