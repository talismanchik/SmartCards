import { useState } from 'react'

import { Icon } from '@/components/ui/icon/Icon'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './RadioGroup.module.scss'

type ValueType = {
  id: string
  value: string
}

type InitialStateType = ValueType[]

export type RadioGroupComponentProps = {
  defaultValue?: string
  disabled?: boolean
  values?: InitialStateType
}

const initialState: InitialStateType = [
  { id: '1', value: 'Did not know' },
  { id: '2', value: 'Forgot' },
  { id: '3', value: 'A lot of thought' },
  { id: '4', value: 'Confused' },
  { id: '5', value: 'Knew the answer' },
]

export const RadioGroupComponent = ({
  defaultValue = initialState[0].value,
  disabled = false,
  values = initialState,
}: RadioGroupComponentProps) => {
  const [currentValue, setCurrentValue] = useState(defaultValue)

  return (
    <div>
      <form>
        <RadioGroup.Root
          aria-label={'View density'}
          className={s.RadioGroupRoot}
          defaultValue={currentValue}
          onValueChange={newValue => setCurrentValue(newValue)}
        >
          {values.map((el: ValueType) => {
            return (
              <div className={s.VariantWrap} key={el.id}>
                {el.value === currentValue ? (
                  <div className={`${s.RadioButton} ${disabled ? s.Disabled : ''}`}>
                    <Icon height={'25'} iconId={'radio_button_checked'} width={'25'} />
                  </div>
                ) : (
                  <div className={`${s.RadioButton} ${disabled ? s.Disabled : ''}`}>
                    <Icon height={'25'} iconId={'radio_button_unchecked'} width={'25'} />
                  </div>
                )}
                <RadioGroup.Item
                  className={s.RadioGroupItem}
                  disabled={disabled}
                  id={el.id}
                  value={el.value}
                >
                  <RadioGroup.Indicator className={s.RadioGroupIndicator} />
                </RadioGroup.Item>
                <label
                  className={`${s.Label} ${disabled ? s.Disabled : ''}`}
                  htmlFor={el.id}
                  onClick={() => setCurrentValue(el.value)}
                >
                  {el.value}
                </label>
              </div>
            )
          })}
        </RadioGroup.Root>
      </form>
    </div>
  )
}
