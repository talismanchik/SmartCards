import { Modal } from '@/components/ui/modal/Modal'
import { ModalButton } from '@/components/ui/modal/modalComponent/footer/ModalFooter'

type AddNewDeckProps = {
  isOpen: boolean
  onOpenChange: () => void
}
export const AddNewDeck = ({ isOpen, onOpenChange }: AddNewDeckProps) => {
  const buttons: ModalButton[] = [
    {
      title: 'Add New Pack',
    },
    {
      title: 'Cancel',
      variant: 'secondary',
    },
  ]

  return (
    <Modal buttons={buttons} onOpenChange={onOpenChange} open={isOpen} title={'Add New Deck'}>
      Modal
    </Modal>
  )
}
