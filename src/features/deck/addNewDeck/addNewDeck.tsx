import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlledCheckbox'
import { ControlledInput } from '@/components/controlled/controlledInput'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Modal } from '@/components/ui/modal/Modal'
import { ModalButton } from '@/components/ui/modal/modalComponent/footer/ModalFooter'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './addNewDeck.module.scss'

type AddNewDeckProps = {
  isOpen: boolean
  onOpenChange: () => void
}
export type SignUpFormValues = z.infer<typeof addNewDeckSchema>
const addNewDeckSchema = z.object({
  isPrivate: z.boolean(),
  nameDeck: z.string(),
})

export const AddNewDeck = ({ isOpen, onOpenChange }: AddNewDeckProps) => {
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: zodResolver(addNewDeckSchema),
  })
  const buttons: ModalButton[] = [
    {
      title: 'Add New Pack',
    },
    {
      title: 'Cancel',
      variant: 'secondary',
    },
  ]

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <Modal
      buttons={buttons}
      className={s.wrapper}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      open={isOpen}
      title={'Add New Deck'}
    >
      <ControlledInput
        className={s.input}
        control={control}
        label={'Name Deck'}
        name={'nameDeck'}
      />
      <Button className={s.button} fullWidth variant={'secondary'}>
        <Icon iconId={'image_outline'} />
        <Typography variant={'subtitle2'}>Upload Image</Typography>
      </Button>
      <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
    </Modal>
  )
}
