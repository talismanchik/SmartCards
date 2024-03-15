import { CardForm } from '@/features/card/cardForm'
import { useCreateCardMutation } from '@/services/cards/cardsService'

type AddNewCardProps = {
  deckId: string
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  title: string
}
export const AddNewCard = ({ deckId, isOpen, onOpenChange, title }: AddNewCardProps) => {
  const [createCard] = useCreateCardMutation()

  const onSubmitForm = (data: FormData) => {
    createCard({ data: data, id: deckId })
  }

  return (
    <CardForm
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onSubmitForm={onSubmitForm}
      title={title}
    />
  )
}
