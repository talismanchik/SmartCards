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
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <Input {...field} {...rest} error={error?.message} />
}
