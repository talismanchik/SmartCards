import { useNavigate } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import { Logo } from '@/assets/logo/logo'
import defaultAvatar from '@/assets/user.png'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { MeResponse } from '@/services/auth/auth.types'
import clsx from 'clsx'

import s from './header.module.scss'

type Props = {
  meData?: MeResponse
}

export const Header = ({ meData }: Props) => {
  const classNames = {
    container: clsx(s.container),
    header: clsx(s.header),
    logo: clsx(s.logo),
    userAvatar: clsx(s.userAvatar),
    userInfo: clsx(s.userInfo),
    userName: clsx(s.userName),
  }
  const navigate = useNavigate()

  return (
    <header className={classNames.header}>
      <div className={classNames.container}>
        <a
          className={classNames.logo}
          onClick={() => {
            scroll.scrollToTop()
          }}
        >
          <Logo />
        </a>
        {meData ? (
          <div className={classNames.userInfo}>
            <Typography
              className={classNames.userName}
              onClick={() => {
                navigate('/profile', {
                  replace: true,
                })
              }}
              variant={'subtitle1'}
            >
              {meData.name}
            </Typography>
            <img
              alt={'User avatar'}
              className={classNames.userAvatar}
              src={meData.avatar ?? defaultAvatar}
            ></img>
          </div>
        ) : (
          <Button variant={'secondary'}>Sign in</Button>
        )}
      </div>
    </header>
  )
}
