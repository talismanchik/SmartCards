import { Card } from '@/components/ui/card'
import { LinkBack } from '@/components/ui/linkBack'
import { Typography } from '@/components/ui/typography'
import { EditProfileAvatar } from '@/pages/profile/editProfileAvatar/editProfileAvatar'
import { EditProfileBody } from '@/pages/profile/editProfileBody/editProfileBody'
import { useGetMeQuery } from '@/services/auth/auth.service'

import s from './profile.module.scss'

export const Profile = () => {
  const { data: meData } = useGetMeQuery()

  return (
    <>
      <LinkBack />
      <Card className={s.cardContainer}>
        <Typography className={s.title} variant={'h1'}>
          Personal Information
        </Typography>
        <EditProfileAvatar avatar={meData?.avatar} />
        <EditProfileBody userEmail={meData?.email} userName={meData?.name} />
      </Card>
    </>
  )
}
