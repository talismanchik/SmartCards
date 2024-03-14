import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type GradeFormValues = z.infer<typeof gradeSchema>
const gradeSchema = z.object({
  grade: z.string(),
})

export const useGradeForm = () => {
  const { control, handleSubmit } = useForm<GradeFormValues>({
    defaultValues: {
      grade: '1',
    },
    resolver: zodResolver(gradeSchema),
  })

  return {
    control,
    handleSubmit,
  }
}
