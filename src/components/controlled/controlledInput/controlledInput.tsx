import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components/ui/input'

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'onChange' | 'value'>
export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledInputProps<T>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <Input onChange={onChange} {...rest} error={error?.message} value={value} />
}
