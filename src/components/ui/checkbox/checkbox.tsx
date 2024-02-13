import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import { Indicator, Root } from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
  onCheckedChange?: (checked: boolean) => void
}

export const Checkbox = ({
  checked,
  className,
  disabled,
  label,
  onCheckedChange,
}: CheckboxProps) => {
  const classNames = {
    checkboxWrapper: clsx(s.checkboxWrapper, disabled && s.disabled),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled, className),
    root: clsx(s.root),
  }

  return (
    <Typography as={'label'} className={classNames.label} htmlFor={'checkbox'} variant={'body2'}>
      <div className={classNames.checkboxWrapper}>
        <Root
          checked={checked}
          className={classNames.root}
          disabled={disabled}
          id={'checkbox'}
          onCheckedChange={onCheckedChange}
        >
          <Indicator className={classNames.indicator} forceMount>
            <Icon
              height={'18'}
              iconId={checked ? 'checkbox_true' : 'checkbox_false'}
              viewBox={'3 3 18 18'}
              width={'18'}
            />
          </Indicator>
        </Root>
      </div>
      {label}
    </Typography>
  )
}
