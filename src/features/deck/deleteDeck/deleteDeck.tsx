import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/Modal'
import { Typography } from '@/components/ui/typography'
import { DeleteDeckArgs } from '@/services/decks/decks.types'
import { useDeleteDeckMutation } from '@/services/decks/decksService'

import s from './deleteDeck.module.scss'

type DeleteDeckProps = {
  deckId: DeleteDeckArgs
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  title: string
}
export const DeleteDeck = ({ deckId, isOpen, onOpenChange, title }: DeleteDeckProps) => {
  const [deleteDeckById] = useDeleteDeckMutation({})
  const deleteDeckHandler = () => {
    deleteDeckById(deckId)
  }
  const onClose = () => {
    onOpenChange(false)
  }

  return (
    <Modal onOpenChange={onOpenChange} open={isOpen} title={title}>
      <Typography variant={'subtitle1'}>
        Do you really want to remove deck? The deck will be removed
      </Typography>
      <div className={s.buttonWrapper}>
        <Button onClick={onClose} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={deleteDeckHandler}>{title}</Button>
      </div>
    </Modal>
  )
}
