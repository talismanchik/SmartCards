import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import * as Select from '@radix-ui/react-select'
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
} & ComponentPropsWithoutRef<typeof Select.Root>

export const SelectDemo: FC<SelectProps> = (props: SelectProps) => {
  const {
    className,
    disabled,
    label,
    onValueChange,
    options,
    placeholder = 'Select value...',
    value,
    ...restProps
  } = props

  const classNames = {
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <Select.Root
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
      <Select.Trigger aria-label={'select'} className={s.trigger}>
        <Select.Value placeholder={placeholder} />
        <Select.Icon className={s.icon}>
          <Icon iconId={'arrow_down'} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={s.content} position={'popper'}>
          <Select.Viewport>
            <Select.Group>
              {options?.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.title}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

type SelectItemProps = {
  className?: string
  variant?: string
} & ComponentPropsWithoutRef<typeof Select.Item>

export const SelectItem = forwardRef<ElementRef<typeof Select.Item>, SelectItemProps>(
  ({ children, className, variant = 'default', ...restProps }, ref): JSX.Element => {
    return (
      <Select.Item {...restProps} className={s.selectItem} ref={ref}>
        <Select.ItemText>
          <Typography className={s.itemText} variant={'body1'}>
            {children}
          </Typography>
        </Select.ItemText>
      </Select.Item>
    )
  }
)
