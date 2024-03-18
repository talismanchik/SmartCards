import { useForm } from 'react-hook-form'

import { EditValues } from '@/features/card/updateCard'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type CardFormValues = z.infer<typeof cardFormSchema>
const cardFormSchema = z.object({
  answer: z.string().min(3).max(30),
  question: z.string().min(3).max(30),
})

export const useCardForm = (editValues: EditValues | undefined) => {
  const { control, handleSubmit, reset, resetField } = useForm<CardFormValues>({
    defaultValues: {
      answer: editValues?.answer ?? '',
      question: editValues?.question ?? '',
    },
    resolver: zodResolver(cardFormSchema),
  })

  return { control, handleSubmit, reset, resetField }
}
