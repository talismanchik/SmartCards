import { ElementRef, forwardRef } from 'react'

import { RadioGroupItem } from '@/components/ui/radioGroup/radioGroupItem/radioGroupItem'
import { Typography } from '@/components/ui/typography'
import { Root } from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './radioGroup.module.scss'

export type ValueType = {
  id: string
  value: string
}

export type InitialStateType = ValueType[]

export type RadioGroupProps = {
  disabled?: boolean
  onValueChange?: (newValue: string) => void
  value?: string
  values?: InitialStateType
}

export const RadioGroup = forwardRef<ElementRef<typeof Root>, RadioGroupProps>(
  ({ disabled = false, onValueChange, value, values }, ref) => {
    const classNames = {
      label: clsx(s.label),
      root: clsx(s.radioGroupRoot),
      variantWrap: clsx(s.variantWrap, disabled ? s.disabled : ''),
    }

    const onValueChangeHandler = (newValue: string) => {
      if (!disabled) {
        onValueChange && onValueChange(newValue)
      }
    }

    return (
      <form>
        <Root
          aria-label={'View density'}
          className={classNames.root}
          onValueChange={(newValue: string) => onValueChangeHandler(newValue)}
          ref={ref}
          value={value}
        >
          {values?.map((el: ValueType) => {
            return (
              <div className={classNames.variantWrap} key={el.id}>
                <RadioGroupItem disabled={disabled} itemValue={el} value={value} />
                <Typography
                  as={'label'}
                  className={classNames.label}
                  htmlFor={el.id}
                  variant={'body2'}
                >
                  {el.value}
                </Typography>
              </div>
            )
          })}
        </Root>
      </form>
    )
  }
)
