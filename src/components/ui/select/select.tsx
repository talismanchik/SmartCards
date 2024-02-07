import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

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
  const { className, disabled, label, onValueChange, options, placeholder, value, ...restProps } =
    props

  return (
    <Select.Root
      disabled={disabled}
      onValueChange={onValueChange}
      required={restProps.required}
      value={value}
    >
      {label && <label> {label} </label>}
      <Select.Trigger aria-label={'select'} className={s.trigger}>
        <Select.Value placeholder={'Select-box'} />
        <Select.Icon className={'SelectIcon'}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={s.content} position={'popper'}>
          <Select.ScrollUpButton className={'SelectScrollButton'}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className={'SelectViewport'}>
            <Select.Group>
              {options?.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.title}
                </SelectItem>
              ))}
            </Select.Group>
            <Select.Separator className={'SelectSeparator'} />
          </Select.Viewport>
          <Select.ScrollDownButton className={'SelectScrollButton'}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
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
      <Select.Item ref={ref} {...restProps}>
        <Select.ItemText>
          <p>{children}</p>
        </Select.ItemText>
      </Select.Item>
    )
  }
)
