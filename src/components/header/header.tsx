import { animateScroll as scroll } from 'react-scroll'

import { AvatarDefault } from '@/assets/avatar/avatarDefoult'
import { Logo } from '@/assets/logo/logo'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './header.module.scss'

type Props = {
  isAuth: boolean
}

export const Header = ({ isAuth }: Props) => {
  const classNames = {
    container: clsx(s.container),
    header: clsx(s.header),
    logo: clsx(s.logo),
    userAvatar: clsx(s.userAvatar),
    userInfo: clsx(s.userInfo),
    userName: clsx(s.userName),
  }

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
        {isAuth ? (
          <div className={classNames.userInfo}>
            <Typography className={classNames.userName} variant={'subtitle1'}>
              User Name
            </Typography>
            <AvatarDefault className={classNames.userAvatar} />
          </div>
        ) : (
          <Button variant={'secondary'}>Sign in</Button>
        )}
      </div>
    </header>
  )
}
