import { useLocation, useNavigate } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import { Logo } from '@/assets/logo/logo'
import defaultAvatar from '@/assets/user.png'
import { Button } from '@/components/ui/button'
import { CustomSeparator, DropdownNew } from '@/components/ui/dropdownNew'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import { useLogOutMutation } from '@/services/auth/auth.service'
import { MeResponse } from '@/services/auth/auth.types'
import { Item } from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './header.module.scss'

type Props = {
  isAuthenticated?: boolean
  meData?: MeResponse
}

export const Header = ({ isAuthenticated, meData }: Props) => {
  const classNames = {
    container: clsx(s.container),
    header: clsx(s.header),
    logo: clsx(s.logo),
    triggerAvatar: clsx(s.userAvatar, s.triggerAvatar),
    userAvatar: clsx(s.userAvatar),
    userInfo: clsx(s.userInfo),
    userName: clsx(s.userName),
  }
  const [logOut] = useLogOutMutation()
  const navigate = useNavigate()
  const location = useLocation()

  const navigateToProfile = () => {
    location.pathname != '/profile' && navigate('/profile')
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
        {isAuthenticated ? (
          <div className={classNames.userInfo}>
            <Typography
              className={classNames.userName}
              onClick={navigateToProfile}
              variant={'subtitle1'}
            >
              {meData && meData.name}
            </Typography>
            <DropdownNew
              label={
                <div className={s.dropdownLabel}>
                  <img
                    alt={'user avatar'}
                    className={classNames.userAvatar}
                    src={meData?.avatar ?? defaultAvatar}
                  />
                  <div className={s.dropdownUserInfo}>
                    <Typography variant={'subtitle2'}>Ivan</Typography>
                    <Typography className={s.dropdownUserEmail} variant={'caption'}>
                      ivan@email.com
                    </Typography>
                  </div>
                </div>
              }
              trigger={
                <img
                  alt={'User avatar'}
                  className={classNames.triggerAvatar}
                  src={meData?.avatar ?? defaultAvatar}
                />
              }
            >
              <Item className={s.dropdownItem} onClick={navigateToProfile}>
                <Icon iconId={'person_outline'} />
                <Typography variant={'caption'}>My Profile</Typography>
              </Item>
              <CustomSeparator />
              <Item className={s.dropdownItem} onClick={() => logOut()}>
                <Icon iconId={'log_out'} />
                <Typography variant={'caption'}>Logout</Typography>
              </Item>
            </DropdownNew>
          </div>
        ) : (
          <Button onClick={() => navigate('/login')} variant={'secondary'}>
            Sign in
          </Button>
        )}
      </div>
    </header>
  )
}
