import { Icon } from '@/components/ui/icon/Icon'
import { TableDataCell, TableRow } from '@/components/ui/table/tableConstructor'
import { Typography } from '@/components/ui/typography'
import { DeckByIDItems } from '@/services/cards/cards.types'

import s from '../cards.module.scss'

import defaultImage from '../../../assets/default.png'
type Props = {
  cards: DeckByIDItems[]
  // isOwner?: boolean
}
export const TableCards = ({ cards }: Props) => {
  const isOwner = false

  return (
    <>
      {cards.map((item: DeckByIDItems) => {
        return (
          <TableRow key={item.id}>
            <TableDataCell>
              <div className={s.imageWrapper}>
                <div className={s.image}>
                  {item.questionImg ? (
                    <img alt={'question-image'} src={item.questionImg} />
                  ) : (
                    <img alt={'default-image'} src={defaultImage} />
                  )}
                </div>
                <Typography variant={'body2'}>{item.question}</Typography>
              </div>
            </TableDataCell>
            <TableDataCell>
              <div className={s.imageWrapper}>
                <div className={s.image}>
                  {item.answerImg ? (
                    <img alt={'answer-image'} src={item.answerImg} />
                  ) : (
                    <img alt={'answer-image'} src={defaultImage} />
                  )}
                </div>
                <Typography variant={'body2'}>{item.answer}</Typography>
              </div>
            </TableDataCell>
            <TableDataCell>
              <Typography variant={'body2'}>
                {new Date(item.updated).toLocaleDateString('ru-RU')}
              </Typography>
            </TableDataCell>
            <TableDataCell>
              <Typography variant={'body2'}>
                <GradeStar grade={item.grade} />
              </Typography>
            </TableDataCell>
            {isOwner && (
              <TableDataCell>
                <Typography variant={'body2'}>
                  <Icon iconId={'edit'} />
                  <Icon iconId={'trash_outline'} />
                </Typography>
              </TableDataCell>
            )}
            {/*<TableDataCell>*/}
            {/*  <div className={s.iconContainer} onClick={() => deleteDeck({ id: item.id })}>*/}
            {/*    <Icon iconId={'play_circle_outline'} />*/}
            {/*  </div>*/}
            {/*</TableDataCell>*/}
          </TableRow>
        )
      })}
    </>
  )
}

type PropsStar = {
  grade: number
}
const GradeStar = ({ grade }: PropsStar) => {
  const maxStars = 5

  const stars = Array.from({ length: maxStars }, (_, index) => {
    const isFilled = index < grade
    const iconId = isFilled ? 'star' : 'star_outline'

    return <Icon className={s.grade} iconId={iconId} key={index} />
  })

  return <>{stars}</>
}
