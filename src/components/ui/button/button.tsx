import { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

type Props<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  const classNames = {
    component: clsx(s.button, s[variant], fullWidth && s.fullWidth, className),
  }

  return <Component className={classNames.component} {...rest} />
}
