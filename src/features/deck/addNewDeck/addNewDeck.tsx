import { useForm, useFormState } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlledCheckbox'
import { ControlledInput } from '@/components/controlled/controlledInput'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Modal } from '@/components/ui/modal/Modal'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './addNewDeck.module.scss'

type AddNewDeckProps = {
  isOpen: boolean
  onOpenChange: () => void
}
export type AddNewDeckFormValues = z.infer<typeof addNewDeckSchema>

const addNewDeckSchema = z.object({
  isPrivate: z.boolean().optional(),
  nameDeck: z.string(),
})

export const AddNewDeck = ({ isOpen, onOpenChange }: AddNewDeckProps) => {
  const { control, handleSubmit } = useForm<AddNewDeckFormValues>({
    resolver: zodResolver(addNewDeckSchema),
  })

  const { errors } = useFormState({ control })

  console.log(errors)

  const onSubmit = (data: AddNewDeckFormValues) => {
    console.log(data)
  }

  return (
    <Modal className={s.wrapper} onOpenChange={onOpenChange} open={isOpen} title={'Add New Deck'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          className={s.input}
          control={control}
          label={'Name Deck'}
          name={'nameDeck'}
        />
        <Button className={s.button} fullWidth type={'button'} variant={'secondary'}>
          <Icon iconId={'image_outline'} />
          <Typography variant={'subtitle2'}>Upload Image</Typography>
        </Button>
        <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </Modal>
  )
}
