import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

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

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }

    const classNames = {
      container: clsx(s.root, className),
      crossSection: clsx(s.crossSection),
      errorCaption: clsx(s.errorCaption),
      eyeSection: clsx(s.eyeSection),
      label: clsx(s.label, rest.disabled && s.labelDisabled),
      searchSection: clsx(s.searchSection),
      textarea: clsx(s.input, s[variant], error ? s.error : ''),
    }

    return (
      <>
        <div className={classNames.container}>
          {label && (
            <Typography as={'label'} className={classNames.label} htmlFor={label} variant={'body2'}>
              {label}
            </Typography>
          )}
          {variant === 'eyeDecoration' && (
            <button
              className={classNames.eyeSection}
              disabled={rest.disabled}
              onClick={() => {
                setClosedEye(prev => !prev)
              }}
              type={'button'}
            >
              {closedEye ? (
                <Icon height={'20'} iconId={'eye_off_outline'} width={'20'} />
              ) : (
                <Icon height={'20'} iconId={'eye_outline'} width={'20'} />
              )}
            </button>
          )}

          {variant === 'searchDecoration' && (
            <button className={classNames.searchSection} disabled={rest.disabled} type={'button'}>
              <Icon height={'20'} iconId={'search'} width={'20'} />
            </button>
          )}

          {variant === 'searchDecoration' && value !== '' && !rest.disabled && (
            <button className={classNames.crossSection} onClick={clearField} type={'button'}>
              <Icon height={'20'} iconId={'close'} width={'20'} />
            </button>
          )}

          <input
            className={classNames.textarea}
            id={label}
            name={rest.name}
            onChange={onChangeHandler}
            ref={ref}
            type={variant === 'eyeDecoration' && closedEye ? 'password' : 'text'}
            value={value}
            {...rest}
          />
        </div>

        {error && (
          <Typography className={classNames.errorCaption} variant={'body2'}>
            {error}
          </Typography>
        )}
      </>
    )
  }
)
