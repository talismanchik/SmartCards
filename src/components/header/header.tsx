import { animateScroll as scroll } from 'react-scroll'

import { Logo } from '@/assets/logo/logo'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'

import s from './header.module.scss'

type Props = {
  isAuth: boolean
}

export const Header = ({ isAuth }: Props) => {
  const classNames = {
    container: clsx(s.container),
    header: clsx(s.header),
  }

  return (
    <header className={classNames.header}>
      <div className={classNames.container}>
        <a
          onClick={() => {
            scroll.scrollToTop()
          }}
        >
          <Logo />
        </a>
        {isAuth ? <div>auth</div> : <Button variant={'secondary'}>Sign in</Button>}
      </div>
    </header>
  )
}
