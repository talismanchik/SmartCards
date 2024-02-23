import { ElementRef, forwardRef } from 'react'

import { Icon } from '@/components/ui/icon/Icon'
import { ValueType } from '@/components/ui/radioGroup'
import { Item } from '@radix-ui/react-radio-group'

import s from '../radioGroup.module.scss'

type Props = {
  disabled: boolean
  itemValue: ValueType
  value?: string
}
export const RadioGroupItem = forwardRef<ElementRef<typeof Item>, Props>(
  ({ disabled, itemValue, value }, ref) => {
    return (
      <Item
        className={s.radioGroupItem}
        disabled={disabled}
        id={itemValue.id}
        ref={ref}
        value={itemValue.value}
      >
        <div className={s.radioIndicator}>
          <Icon
            height={'16'}
            iconId={itemValue.value === value ? 'radio_button_checked' : 'radio_button_unchecked'}
            width={'16'}
          />
        </div>
      </Item>
    )
  }
)
