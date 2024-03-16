import { ControlledRadioGroup } from '@/components/controlled/controlledRadioGroup'
import { useGradeForm } from '@/components/forms/gradeForm/useGradeForm'
import { Button } from '@/components/ui/button'
import { ValueType } from '@/components/ui/radioGroup'
import { Typography } from '@/components/ui/typography'

import s from './gradeForm.module.scss'

type Props = {
  onSubmit: (grade: string) => void
}
export const GradeForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useGradeForm()

  const onSubmitForm = handleSubmit(data => {
    onSubmit(data.grade)
  })

  return (
    <form className={s.gradeForm} onSubmit={onSubmitForm}>
      <Typography className={s.gradeTitle} variant={'subtitle1'}>
        Rate yourself:
      </Typography>
      <ControlledRadioGroup control={control} name={'grade'} values={grade} />
      <Button className={s.submit} fullWidth type={'submit'}>
        Next Question
      </Button>
    </form>
  )
}

const grade: ValueType[] = [
  { id: '1', title: 'Did not know', value: '1' },
  { id: '2', title: 'Forgot', value: '2' },
  { id: '3', title: 'A lot of thought', value: '3' },
  { id: '4', title: 'Confused', value: '4' },
  { id: '5', title: 'Knew the answer', value: '5' },
]
