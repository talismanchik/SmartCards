import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, Props>(({ className, ...restProps }) => {
  const classNames = clsx(s.root, className)

  return <div className={classNames} {...restProps} />
})
