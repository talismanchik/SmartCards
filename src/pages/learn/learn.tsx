import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledRadioGroup } from '@/components/controlled/controlledRadioGroup'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LinkBack } from '@/components/ui/linkBack'
import { ValueType } from '@/components/ui/radioGroup'
import { Typography } from '@/components/ui/typography'
import { z } from 'zod'

import s from './learn.module.scss'

export type RateYourselfFormValues = z.infer<typeof rateYourselfSchema>
const rateYourselfSchema = z.object({
  rateYourself: z.string(),
})

export const Learn = () => {
  const [show, setShow] = useState(false)

  const { control, handleSubmit } = useForm<RateYourselfFormValues>()

  const rateYourself: ValueType[] = [
    { id: '1', title: 'Did not know', value: '1' },
    { id: '2', title: 'Forgot', value: '2' },
    { id: '3', title: 'A lot of thought', value: '3' },
    { id: '4', title: 'Confused', value: '4' },
    { id: '5', title: 'Knew the answer', value: '5' },
  ]

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <div className={s.wrapper}>
      <LinkBack />
      <Card className={s.learnWrapper}>
        <Typography className={s.titleLearn} variant={'h1'}>
          Learn Deck Name
        </Typography>
        <Typography className={s.question} variant={'subtitle1'}>
          Question: Question{' '}
        </Typography>
        <div>
          PHOTO
          <img alt={'question'} src={''} />
        </div>
        <Typography className={s.count} variant={'subtitle2'}>
          Count of attempts: 10
        </Typography>
        <Button fullWidth onClick={() => setShow(true)}>
          Show Answer
        </Button>
        {show && (
          <div>
            <Typography className={s.answer} variant={'subtitle1'}>
              Answer: Answer
            </Typography>
            <div>
              PHOTO
              <img alt={'answer'} src={''} />
            </div>
            <form onSubmit={onSubmit}>
              <ControlledRadioGroup control={control} name={'rateYourself'} values={rateYourself} />
              <Button fullWidth type={'submit'}>
                Next Question
              </Button>
            </form>
          </div>
        )}
      </Card>
    </div>
  )
}
