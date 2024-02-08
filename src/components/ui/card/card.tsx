import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

type Props = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, Props>(({ children, className, ...restProps }) => {
  const classNames = clsx(s.root, className)

  return (
    <div className={classNames} {...restProps}>
      {children}
    </div>
  )
})
