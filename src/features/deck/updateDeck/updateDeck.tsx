import { DeckForm } from '@/features/deck/deckForm'

type UpdateDeckProps = {
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  title: string
}
export const UpdateDeck = ({ isOpen, onOpenChange, title }: UpdateDeckProps) => {
  const onSubmitForm = (data: any) => {
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
