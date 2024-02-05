import { ComponentPropsWithoutRef, useState } from 'react'

import { ClosedEye } from '@/components/ui/input/assetsForInput/ClosedEye'
import { Cross } from '@/components/ui/input/assetsForInput/Cross'
import { Eye } from '@/components/ui/input/assetsForInput/Eye'
import { Search } from '@/components/ui/input/assetsForInput/Search'

import s from './input.module.scss'

export type InputProps = {
  error?: string
  value?: string
  variant?: 'eyeDecoration' | 'searchDecoration' | 'withoutDecoration'
} & ComponentPropsWithoutRef<'input'>

export const Input = ({ className, error, variant = 'withoutDecoration', ...rest }: InputProps) => {
  const [closedEye, setClosedEye] = useState(false)
  const [value, setValue] = useState(rest.value ?? '')

  return (
    <>
      <div className={s.root}>
        {variant === 'eyeDecoration' && (
          <button
            className={s.eyeSection}
            disabled={rest.disabled}
            onClick={() => {
              setClosedEye(prev => !prev)
            }}
          >
            {closedEye ? <ClosedEye /> : <Eye />}
          </button>
        )}

        {variant === 'searchDecoration' && (
          <button className={s.searchSection} disabled={rest.disabled}>
            <Search />
          </button>
        )}

        {variant === 'searchDecoration' && value && !rest.disabled && (
          <button className={s.crossSection} onClick={() => setValue('')}>
            <Cross />
          </button>
        )}

        <input
          className={`${s.input} ${s[variant]} ${error ? s.error : ''} ${className}`}
          onChange={event => {
            setValue(event.currentTarget.value)
          }}
          type={variant === 'eyeDecoration' ? (!closedEye ? 'text' : 'password') : 'text'}
          value={value}
          {...rest}
        />
      </div>
      {error && <div className={s.errorCaption}>{error}</div>}
    </>
  )
}
