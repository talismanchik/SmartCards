import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/Modal'
import { Typography } from '@/components/ui/typography'
import { useDeleteCardMutation } from '@/services/cards/cardsService'

import s from './deleteCard.module.scss'

type DeleteCardProps = {
  id: string
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  title: string
}
export const DeleteCard = ({ id, isOpen, onOpenChange, title }: DeleteCardProps) => {
  const [deleteCard] = useDeleteCardMutation()
  const onSubmitDeleteCard = async () => {
    await toast.promise(deleteCard({ id }).unwrap(), {
      error: "Couldn't Delete",
      success: 'Card was deleted',
    })
    onOpenChange(false)
  }
  const onClose = () => {
    onOpenChange(false)
  }

  return (
    <Modal className={s.wrapper} onOpenChange={onOpenChange} open={isOpen} title={title}>
      <Typography className={s.text}>Do you really want to remove this card?</Typography>
      <div className={s.buttonWrapper}>
        <Button onClick={onClose} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={onSubmitDeleteCard}>{title}</Button>
      </div>
    </Modal>
  )
}
