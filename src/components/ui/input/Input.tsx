import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'

import s from './input.module.scss'

export type InputProps = {
  clearField?: () => void
  error?: string
  label?: string
  onValueChange?: (value: string) => void
  variant?: 'eyeDecoration' | 'searchDecoration' | 'withoutDecoration'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      clearField,
      error,
      label,
      onChange,
      onValueChange,
      value,
      variant = 'withoutDecoration',
      ...rest
    },
    ref
  ) => {
    const [closedEye, setClosedEye] = useState(true)

    return (
      <>
        <div className={s.root}>
          {label && (
            <Typography
              as={'label'}
              className={`${s.label} ${rest.disabled && s.labelDisabled}`}
              htmlFor={label}
              variant={'body2'}
            >
              {label}
            </Typography>
          )}
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
              <Icon height={'20'} iconId={'search'} width={'20'} />
            </button>
          )}

          {variant === 'searchDecoration' && value !== '' && clearField && !rest.disabled && (
            <button className={s.crossSection} onClick={clearField}>
              <Icon height={'20'} iconId={'close'} width={'20'} />
            </button>
          )}

          <input
            className={`${s.input} ${s[variant]} ${className} ${error ? s.error : ''} `}
            id={label}
            onChange={onChange}
            ref={ref}
            type={variant === 'eyeDecoration' && closedEye ? 'password' : 'text'}
            value={value}
            {...rest}
          />
        </div>
        {error && (
          <Typography className={s.errorCaption} variant={'body2'}>
            {error}
          </Typography>
        )}
      </>
    )
  }
)
