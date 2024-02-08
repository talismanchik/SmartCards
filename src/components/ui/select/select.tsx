import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Icon } from '@/components/ui/icon/Icon'
import { SelectItem } from '@/components/ui/select/selectItem/selectItem'
import { Typography } from '@/components/ui/typography'
import {
  Content,
  Portal,
  Root,
  Icon as SelectIcon,
  Trigger,
  Value,
  Viewport,
} from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

type OptionsProps = {
  title: string
  value: string
}

type SelectProps = {
  className?: string
  label?: string
  options?: OptionsProps[]
  placeholder?: string
} & ComponentPropsWithoutRef<typeof Root>

export const SelectDemo = forwardRef<ElementRef<typeof Root>, SelectProps>(
  (
    {
      className,
      disabled,
      label,
      onValueChange,
      options,
      placeholder = 'Select value...',
      value,
      ...restProps
    },
    ref
  ) => {
    const classNames = {
      label: clsx(s.label, disabled && s.disabled),
    }

    return (
      <Root
        disabled={disabled}
        onValueChange={onValueChange}
        required={restProps.required}
        value={value}
      >
        {label && (
          <Typography className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <Trigger aria-label={'select'} className={s.trigger}>
          <Value placeholder={placeholder} />
          <SelectIcon className={s.icon}>
            <Icon iconId={'arrow_down'} />
          </SelectIcon>
        </Trigger>
        <Portal>
          <Content className={s.content} position={'popper'}>
            <Viewport>
              {options?.map(option => (
                <SelectItem key={option.value} ref={ref} value={option.value}>
                  {option.title}
                </SelectItem>
              ))}
            </Viewport>
          </Content>
        </Portal>
      </Root>
    )
  }
)
