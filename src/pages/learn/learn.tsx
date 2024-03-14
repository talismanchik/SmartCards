import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { ControlledRadioGroup } from '@/components/controlled/controlledRadioGroup'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LinkBack } from '@/components/ui/linkBack'
import { ValueType } from '@/components/ui/radioGroup'
import { Typography } from '@/components/ui/typography'
import { useCardFilter } from '@/pages/cards/hooks/useCardFilter'
import { LearnImage } from '@/pages/learn/learnImage/learnImage'
import { useGradeForm } from '@/pages/learn/useGradeForm'
import { useGetLearnCardQuery } from '@/services/cards/cardsService'

import s from './learn.module.scss'

export const Learn = () => {
  const { deckId } = useParams()
  const { deckData } = useCardFilter()
  const [show, setShow] = useState(false)
  const { data: learnData } = useGetLearnCardQuery({
    id: deckId || '',
  })
  const { control, handleSubmit } = useGradeForm()

  const onSubmit = handleSubmit(data => {
    console.log(data)
    setShow(false)
  })

  return (
    <>
      <LinkBack />
      <Card className={s.learnWrapper}>
        <Typography className={s.titleLearn} variant={'h1'}>
          Learn {deckData?.name}
        </Typography>
        <LearnImage
          image={learnData?.questionImg}
          subtitle={learnData?.question}
          title={'Question'}
        />
        <Typography className={s.count} variant={'body2'}>
          Count of attempts: {learnData?.shots}
        </Typography>
        {!show && (
          <Button fullWidth onClick={() => setShow(true)}>
            Show Answer
          </Button>
        )}
        {show && (
          <>
            <LearnImage
              image={learnData?.answerImg}
              subtitle={learnData?.answer}
              title={'Answer'}
            />
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

const grade: ValueType[] = [
  { id: '1', title: 'Did not know', value: '1' },
  { id: '2', title: 'Forgot', value: '2' },
  { id: '3', title: 'A lot of thought', value: '3' },
  { id: '4', title: 'Confused', value: '4' },
  { id: '5', title: 'Knew the answer', value: '5' },
]
