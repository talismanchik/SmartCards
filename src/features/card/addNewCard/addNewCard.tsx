import { toast } from 'react-toastify'

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

  const onSubmitForm = async (data: FormData) => {
    await toast.promise(createCard({ data: data, id: deckId }).unwrap(), {
      error: 'Failed to add new card',
      success: 'Added',
    })
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
