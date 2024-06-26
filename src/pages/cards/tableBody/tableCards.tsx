import { useState } from 'react'

import { useWindowWidth } from '@/components/hooks/useWindowWidth'
import { GradeStar } from '@/components/ui/gradeStar'
import { Icon } from '@/components/ui/icon/Icon'
import { TableDataCell, TableRow } from '@/components/ui/table/tableConstructor'
import { Typography } from '@/components/ui/typography'
import { DeleteCard } from '@/features/card/deleteCard'
import { UpdateCard } from '@/features/card/updateCard'
import { DeckByIDCardsItems } from '@/services/cards/cards.types'

import s from '../cards.module.scss'

import defaultImage from '../../../assets/defaultImg.png'

type Props = {
  cards: DeckByIDCardsItems
  isOwner: boolean
}
export const TableCards = ({ cards, isOwner }: Props) => {
  const [isOpenDelete, setIsOpenDelete] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const mobileWidth = useWindowWidth()

  return (
    <TableRow key={cards.id}>
      <TableDataCell>
        <div className={s.imageWrapper}>
          <div className={s.image}>
            {cards.questionImg ? (
              <img alt={'question-image'} src={cards.questionImg} />
            ) : (
              <img alt={'default-image'} src={defaultImage} />
            )}
          </div>
          <Typography title={cards.question} variant={'body2'}>
            {cards.question}
          </Typography>
        </div>
      </TableDataCell>
      <TableDataCell>
        <div className={s.imageWrapper}>
          <div className={s.image}>
            {cards.answerImg ? (
              <img alt={'answer-image'} src={cards.answerImg} />
            ) : (
              <img alt={'answer-image'} src={defaultImage} />
            )}
          </div>
          <Typography title={cards.answer} variant={'body2'}>
            {cards.answer}
          </Typography>
        </div>
      </TableDataCell>

      {!mobileWidth && (
        <TableDataCell>
          <Typography variant={'body2'}>
            {new Date(cards.updated).toLocaleDateString('ru-RU')}
          </Typography>
        </TableDataCell>
      )}

      <TableDataCell>
        <Typography variant={'body2'}>
          <GradeStar grade={cards.grade} />
        </Typography>
      </TableDataCell>
      {isOwner && (
        <TableDataCell>
          <div className={s.iconsWrapper}>
            <button className={s.iconWrap} onClick={() => setIsOpenUpdate(true)}>
              <Icon className={s.editIcon} iconId={'edit'} />
            </button>
            <div>
              <button className={s.iconWrap} onClick={() => setIsOpenDelete(true)}>
                <Icon className={s.trashIcon} iconId={'trash_outline'} />
              </button>
              <DeleteCard
                id={cards.id}
                isOpen={isOpenDelete}
                onOpenChange={value => setIsOpenDelete(value)}
                title={'Delete Card'}
              />
              <UpdateCard
                answer={cards.answer}
                cardId={cards.id}
                coverAnswer={cards.answerImg}
                coverQuestion={cards.questionImg}
                isOpen={isOpenUpdate}
                onOpenChange={value => setIsOpenUpdate(value)}
                question={cards.question}
                title={'Update Card'}
              />
            </div>
          </div>
        </TableDataCell>
      )}
    </TableRow>
  )
}
