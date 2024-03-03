import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/Modal'
import { Typography } from '@/components/ui/typography'
import { UpdateDeleteDeckArgs } from '@/services/decks/decks.types'
import { useDeleteDeckMutation } from '@/services/decks/decksService'

import s from './deleteDeck.module.scss'

type DeleteDeckProps = {
  deckId: UpdateDeleteDeckArgs
  deckName: string
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  title: string
}
export const DeleteDeck = ({ deckId, deckName, isOpen, onOpenChange, title }: DeleteDeckProps) => {
  const [deleteDeckById] = useDeleteDeckMutation()
  const onSubmitDeleteDeck = () => {
    deleteDeckById(deckId)
    onOpenChange(false)
  }
  const onClose = () => {
    onOpenChange(false)
  }

  return (
    <Modal className={s.wrapper} onOpenChange={onOpenChange} open={isOpen} title={title}>
      <Typography className={s.text}>
        Do you really want to remove{' '}
        <Typography as={'span'} variant={'h4'}>
          {deckName}?
        </Typography>
        <br />
        The deck will be removed.
      </Typography>
      <div className={s.buttonWrapper}>
        <Button onClick={onClose} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={onSubmitDeleteDeck}>{title}</Button>
      </div>
    </Modal>
  )
}
