import { ReactNode } from 'react'

import clsx from 'clsx'

import s from './ContentContainer.module.scss'

type Props = {
  children: ReactNode
  className?: string
}

export const ContentContainer = ({ children, className }: Props) => {
  const classNames = {
    section: clsx(s.container, className),
  }

  return <section className={classNames.section}>{children}</section>
}
