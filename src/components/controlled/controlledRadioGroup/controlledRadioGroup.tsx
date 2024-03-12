import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radioGroup'

type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'onValueChange' | 'value'>
export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledRadioGroupProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <RadioGroup {...rest} onValueChange={onChange} value={value} />
}
