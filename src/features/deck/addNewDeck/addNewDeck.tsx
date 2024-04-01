import { toast } from 'react-toastify'

import { DeckForm } from '@/features/deck/deckForm'
import { useCreateDeckMutation } from '@/services/decks/decksService'

type AddNewDeckProps = {
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  title: string
}

export const AddNewDeck = ({ isOpen, onOpenChange, title }: AddNewDeckProps) => {
  const [createDeck] = useCreateDeckMutation()
  const onSubmitForm = async (data: FormData) => {
    await toast.promise(createDeck(data).unwrap(), {
      error: 'Failed to add new deck',
      success: 'Added',
    })
  }

  return (
    <DeckForm
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onSubmitForm={onSubmitForm}
      title={title}
    />
  )
}
