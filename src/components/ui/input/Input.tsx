import { ComponentPropsWithoutRef } from 'react'

import s from './input.module.scss'

export type InputProps = {
  error?: boolean
  variant?: 'eyeDecoration' | 'searchDecoration' | 'withoutDecoration'
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  className,
  error = false,
  variant = 'withoutDecoration',
  ...rest
}: InputProps) => {
  return (
    <input className={`${s.input} ${s[variant]} ${error ? s.error : ''} ${className}`} {...rest} />
  )
}
