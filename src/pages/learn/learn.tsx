import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledRadioGroup } from '@/components/controlled/controlledRadioGroup'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LinkBack } from '@/components/ui/linkBack'
import { ValueType } from '@/components/ui/radioGroup'
import { Typography } from '@/components/ui/typography'
import { LearnImage } from '@/pages/learn/learnImage/learnImage'
import { z } from 'zod'

import s from './learn.module.scss'

import image from '../../assets/defaultImg.png'

export type GradeFormValues = z.infer<typeof gradeSchema>
const gradeSchema = z.object({
  grade: z.string(),
})

export const Learn = () => {
  const [show, setShow] = useState(false)

  const { control, handleSubmit } = useForm<GradeFormValues>()

  const grade: ValueType[] = [
    { id: '1', title: 'Did not know', value: '1' },
    { id: '2', title: 'Forgot', value: '2' },
    { id: '3', title: 'A lot of thought', value: '3' },
    { id: '4', title: 'Confused', value: '4' },
    { id: '5', title: 'Knew the answer', value: '5' },
  ]

  const onSubmit = handleSubmit(data => {
    console.log(data)
    setShow(false)
  })

  return (
    <>
      <LinkBack />
      <Card className={s.learnWrapper}>
        <Typography className={s.titleLearn} variant={'h1'}>
          Learn Deck Name
        </Typography>
        <LearnImage image={image} subtitle={'Question - qqq'} title={'Question'} />
        <Typography className={s.count} variant={'subtitle2'}>
          Count of attempts: 10
        </Typography>
        {!show && (
          <Button fullWidth onClick={() => setShow(true)}>
            Show Answer
          </Button>
        )}
        {show && (
          <>
            <LearnImage subtitle={'Answer - aaa'} title={'Answer'} />
            <form className={s.gradeForm} onSubmit={onSubmit}>
              <Typography className={s.gradeTitle} variant={'subtitle1'}>
                Rate yourself:
              </Typography>
              <ControlledRadioGroup control={control} name={'grade'} values={grade} />
              <Button className={s.submit} fullWidth type={'submit'}>
                Next Question
              </Button>
            </form>
          </>
        )}
      </Card>
    </>
  )
}
