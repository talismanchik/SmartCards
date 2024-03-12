import { useForm } from 'react-hook-form'

import { ControlledInput } from '@/components/controlled/controlledInput'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '../../profile.module.scss'

type Props = {
  defaultName?: string
  onSubmitForm: (name: ChangeNameValues) => void
}
export type ChangeNameValues = z.infer<typeof changeNickNameSchema>
const changeNickNameSchema = z.object({
  name: z.string().max(30),
})

export const ChangeNickNameForm = ({ defaultName, onSubmitForm }: Props) => {
  const { control, handleSubmit } = useForm<ChangeNameValues>({
    defaultValues: { name: defaultName },
    resolver: zodResolver(changeNickNameSchema),
  })

  const onSubmit = handleSubmit(data => {
    onSubmitForm(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <ControlledInput control={control} label={'NickName'} name={'name'} />
      <Button className={s.saveChangeButton} fullWidth>
        Save Changes
      </Button>
    </form>
  )
}
