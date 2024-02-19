import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'
type Props<T extends FieldValues> = Pick<UseControllerProps<T>, 'control' | 'name'> &
  Omit<CheckboxProps, 'checked' | 'onCheckedChange'>
export const ControlledCheckbox = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name: name,
  })

  return <Checkbox {...rest} checked={value} onCheckedChange={onChange} />
}
