import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import { Item, Root } from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './RadioGroup.module.scss'

export type ValueType = {
  id: string
  value: string
}

export type InitialStateType = ValueType[]

export type RadioGroupProps = {
  disabled?: boolean
  onValueChange: (newValue: string) => void
  value: string
  values: InitialStateType
}

export const RadioGroup = ({ disabled = false, onValueChange, value, values }: RadioGroupProps) => {
  const classNames = {
    label: clsx(s.Label),
    radioGroupItem: clsx(s.RadioGroupItem),
    radioIndicator: clsx(s.RadioIndicator),
    root: clsx(s.RadioGroupRoot),
    variantWrap: clsx(s.VariantWrap, disabled ? s.Disabled : ''),
  }

  const onValueChangeHandler = (newValue: string) => {
    if (!disabled) {
      onValueChange(newValue)
    }
  }

  return (
    <form>
      <Root
        aria-label={'View density'}
        className={classNames.root}
        onValueChange={(newValue: string) => onValueChangeHandler(newValue)}
        value={value}
      >
        {values.map((el: ValueType) => {
          return (
            <div className={classNames.variantWrap} key={el.id}>
              <Item
                className={classNames.radioGroupItem}
                disabled={disabled}
                id={el.id}
                value={el.value}
              >
                <div className={classNames.radioIndicator}>
                  <Icon
                    height={'16'}
                    iconId={el.value === value ? 'radio_button_checked' : 'radio_button_unchecked'}
                    width={'16'}
                  />
                </div>
              </Item>
              <Typography
                as={'label'}
                className={classNames.label}
                htmlFor={el.id}
                onClick={() => onValueChangeHandler(el.value)}
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
