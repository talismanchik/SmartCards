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
    { id: '1', value: 'Did not know' },
    { id: '2', value: 'Forgot' },
    { id: '3', value: 'A lot of thought' },
    { id: '4', value: 'Confused' },
    { id: '5', value: 'Knew the answer' },
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
