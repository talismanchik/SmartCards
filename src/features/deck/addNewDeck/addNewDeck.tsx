import { DeckForm } from '@/features/deck/deckForm'
import { CreateDeckArgs } from '@/services/decks/decks.types'
import { useCreateDeckMutation } from '@/services/decks/decksService'

type AddNewDeckProps = {
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  title: string
}

export const AddNewDeck = ({ isOpen, onOpenChange, title }: AddNewDeckProps) => {
  const [createDeck] = useCreateDeckMutation({})
  const onSubmitForm = (data: CreateDeckArgs) => {
    createDeck(data)
    console.log(data)
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
