import { useForm } from 'react-hook-form'

import { EditValues } from '@/features/card/updateCard'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type AddNewCardFormValues = z.infer<typeof addNewCardFormSchema>
const addNewCardFormSchema = z.object({
  answer: z.string().min(3).max(30),
  question: z.string().min(3).max(30),
})

export const useCardForm = (editValues: EditValues | undefined) => {
  const { control, handleSubmit, reset, resetField } = useForm<AddNewCardFormValues>({
    defaultValues: {
      answer: editValues?.answer ?? '',
      question: editValues?.question ?? '',
    },
    resolver: zodResolver(addNewCardFormSchema),
  })

  return { control, handleSubmit, reset, resetField }
}
