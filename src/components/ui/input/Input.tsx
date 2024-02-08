import { ComponentPropsWithoutRef, useState } from 'react'

import { Icon } from '@/components/ui/icon/Icon'

import s from './input.module.scss'

export type InputProps = {
  error?: string
  value?: string
  variant?: 'eyeDecoration' | 'searchDecoration' | 'withoutDecoration'
} & ComponentPropsWithoutRef<'input'>

export const Input = ({ className, error, variant = 'withoutDecoration', ...rest }: InputProps) => {
  const [closedEye, setClosedEye] = useState(true)
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
            {closedEye ? (
              <Icon height={'24'} iconId={'eye_off_outline'} width={'24'} />
            ) : (
              <Icon height={'24'} iconId={'eye_outline'} width={'24'} />
            )}
          </button>
        )}

        {variant === 'searchDecoration' && (
          <button className={s.searchSection} disabled={rest.disabled}>
            <Icon height={'18.005802'} iconId={'search'} width={'18.005802'} />
          </button>
        )}

        {variant === 'searchDecoration' && value && !rest.disabled && (
          <button className={s.crossSection} onClick={() => setValue('')}>
            <Icon height={'18'} iconId={'close'} width={'18'} />
          </button>
        )}

        <input
          className={`${s.input} ${s[variant]} ${error ? s.error : ''} ${className}`}
          onChange={event => {
            setValue(event.currentTarget.value)
          }}
          type={variant === 'eyeDecoration' && closedEye ? 'password' : 'text'}
          value={value}
          {...rest}
        />
      </div>
      {error && <div className={s.errorCaption}>{error}</div>}
    </>
  )
}
