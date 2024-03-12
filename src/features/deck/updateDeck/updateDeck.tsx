import { DeckForm } from '@/features/deck/deckForm'
import { useUpdateDeckMutation } from '@/services/decks/decksService'

type UpdateDeckProps = {
  cover: File | null | string
  id: string
  isOpen: boolean
  isPrivate: boolean
  name: string
  onOpenChange: (value: boolean) => void
  title: string
}
export type EditValues = {
  cover: File | null | string | undefined
  isPrivate: boolean
  name: string
}
export const UpdateDeck = ({
  cover,
  id,
  isOpen,
  isPrivate,
  name,
  onOpenChange,
  title,
}: UpdateDeckProps) => {
  const [updateDeckById] = useUpdateDeckMutation()
  const onSubmitForm = (data: FormData) => {
    console.log(data)
    updateDeckById({ body: data, id })
  }
  const editValues: EditValues = {
    cover,
    isPrivate,
    name,
  }

  return (
    <DeckForm
      editValues={editValues}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onSubmitForm={onSubmitForm}
      title={title}
    />
  )
}
