import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { GradeForm } from '@/components/forms/gradeForm'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LinkBack } from '@/components/ui/linkBack'
import { Spinner } from '@/components/ui/spinner'
import { Typography } from '@/components/ui/typography'
import { LearnImage } from '@/pages/learn/learnImage'
import {
  useCreateLearnGradeMutation,
  useGetDeckQuery,
  useGetLearnCardQuery,
} from '@/services/cards/cardsService'

import s from './learn.module.scss'

export const Learn = () => {
  const { deckId } = useParams()
  const [show, setShow] = useState(false)
  const { data: learnData, isLoading } = useGetLearnCardQuery({
    id: deckId || '',
  })
  const { data: deckData } = useGetDeckQuery({
    id: deckId || '',
  })

  const [createLearnGrade] = useCreateLearnGradeMutation()

  const onSubmit = (grade: string) => {
    createLearnGrade({ cardId: learnData?.id || '', grade: +grade })
    setShow(false)
  }

  if (isLoading) {
    return <Spinner />
  }

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
            <GradeForm onSubmit={onSubmit} />
          </>
        )}
      </Card>
    </>
  )
}
