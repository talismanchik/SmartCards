import { CheckIcon } from '@/components/assets/icons/CheckIcon'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

type PositionType = 'default' | 'left'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onCheckedChange?: (checked: boolean) => void
  position?: PositionType
}

export const Checkbox = ({
  checked,
  className,
  disabled,
  id,
  label,
  onCheckedChange,
  position = 'default',
}: CheckboxProps) => {
  const classNames = {
    checkboxWrapper: clsx(s.checkboxWrapper, disabled && s.disabled, s[position]),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled, className),
    root: clsx(s.root),
  }

  return (
    <p className={classNames.label}>
      <div className={classNames.checkboxWrapper}>
        <RadixCheckbox.Root
          checked={checked}
          className={classNames.root}
          disabled={disabled}
          id={id}
          onCheckedChange={onCheckedChange}
        >
          {checked && (
            <RadixCheckbox.Indicator className={classNames.indicator} forceMount>
              <CheckIcon disabled={disabled} />
            </RadixCheckbox.Indicator>
          )}
        </RadixCheckbox.Root>
      </div>
      {label}
    </p>
  )
}
