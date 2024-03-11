import { CardForm } from '@/features/card/cardForm'

type AddNewCardProps = {
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  title: string
}
export const AddNewCard = ({ isOpen, onOpenChange, title }: AddNewCardProps) => {
  // const [deleteDeckById] = useDeleteDeckMutation()

  const onSubmitForm = (data: FormData) => {
    // createCard(data)
    alert('New card added: ' + data)
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
