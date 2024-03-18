import { useForm } from 'react-hook-form'

import { EditValues } from '@/features/deck/updateDeck'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type DeckFormValues = z.infer<typeof deckFormSchema>

export const deckFormSchema = z.object({
  isPrivate: z.boolean().optional().default(false),
  name: z.string(),
})

export const useDeckForm = (editValues: EditValues | undefined) => {
  const { control, handleSubmit, reset, resetField } = useForm<DeckFormValues>({
    defaultValues: {
      isPrivate: editValues?.isPrivate || false,
      name: editValues?.name || '',
    },
    resolver: zodResolver(deckFormSchema),
  })

  return { control, handleSubmit, reset, resetField }
}
