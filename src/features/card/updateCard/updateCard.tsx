import { toast } from 'react-toastify'

import { CardForm } from '@/features/card/cardForm'
import { useUpdateCardMutation } from '@/services/cards/cardsService'

type UpdateCardProps = {
  answer: string
  cardId: string | undefined
  coverAnswer: File | null | string
  coverQuestion: File | null | string
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  question: string
  title: string
}
export type EditValues = {
  answer: string
  coverAnswer: File | null | string | undefined
  coverQuestion: File | null | string | undefined
  question: string
}
export const UpdateCard = ({
  answer,
  cardId,
  coverAnswer,
  coverQuestion,
  isOpen,
  onOpenChange,
  question,
  title,
}: UpdateCardProps) => {
  const [updateCardById] = useUpdateCardMutation()
  const onSubmitForm = async (data: FormData) => {
    await toast.promise(updateCardById({ body: data, id: cardId }).unwrap(), {
      error: "Couldn't update",
      success: 'Card was updated',
    })
  }
  const editValues: EditValues = {
    answer,
    coverAnswer,
    coverQuestion,
    question,
  }

  return (
    <CardForm
      editValues={editValues}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onSubmitForm={onSubmitForm}
      title={title}
    />
  )
}
