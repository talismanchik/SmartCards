import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LinkBack } from '@/components/ui/linkBack'
import { Typography } from '@/components/ui/typography'

import s from './learn.module.scss'
export const Learn = () => {
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
        <Button fullWidth>Show Answer</Button>
      </Card>
    </div>
  )
}
