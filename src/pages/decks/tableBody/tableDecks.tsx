import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import defaultImage from '@/assets/default.png'
import { Icon } from '@/components/ui/icon/Icon'
import { TableDataCell, TableRow } from '@/components/ui/table/tableConstructor'
import { Typography } from '@/components/ui/typography'
import { DeleteDeck } from '@/features/deck/deleteDeck'
import { UpdateDeck } from '@/features/deck/updateDeck'
import { Deck } from '@/services/decks/decks.types'
import clsx from 'clsx'

import s from '@/components/ui/table/table.module.scss'

type props = {
  deck: Deck
}

export const TableDecks = ({ deck }: props) => {
  const [isOpenDelete, setIsOpenDelete] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const navigate = useNavigate()
  const onLinkToCards = (id: string) => {
    navigate(`/cards/${id}`)
  }

  const styles = {
    iconWrapper: clsx(s.iconWrapper),
    nameWrapper: clsx(s.nameWrapper),
  }

  return (
    <TableRow key={deck.id}>
      <TableDataCell onClick={() => onLinkToCards(deck.id)}>
        <div className={styles.nameWrapper}>
          {deck.cover ? (
            <img alt={'question-image'} className={s.tableImage} src={deck.cover} />
          ) : (
            <img alt={'default-image'} className={s.tableImage} src={defaultImage} />
          )}
          <Typography variant={'body2'}>{deck.name}</Typography>
        </div>
      </TableDataCell>
      <TableDataCell>
        <Typography variant={'body2'}>{deck.cardsCount}</Typography>
      </TableDataCell>
      <TableDataCell>
        <Typography variant={'body2'}>
          {new Date(deck.updated).toLocaleDateString('ru-RU')}
        </Typography>
      </TableDataCell>
      <TableDataCell>
        <Typography variant={'body2'}>{deck.author.name}</Typography>
      </TableDataCell>
      <TableDataCell>
        <div className={s.iconContainer}>
          <div>
            <button className={styles.iconWrapper} onClick={() => setIsOpenUpdate(true)}>
              <Icon iconId={'edit_outline'} />
            </button>
            <UpdateDeck
              cover={deck.cover}
              id={deck.id}
              isOpen={isOpenUpdate}
              isPrivate={deck.isPrivate}
              name={deck.name}
              onOpenChange={value => setIsOpenUpdate(value)}
              title={'Update Deck'}
            />
          </div>

          <a className={styles.iconWrapper}>
            <Icon iconId={'play_circle_outline'} />
          </a>
          <div>
            <button className={styles.iconWrapper} onClick={() => setIsOpenDelete(true)}>
              <Icon iconId={'trash_outline'} />
            </button>
            <DeleteDeck
              deckId={{ id: deck.id }}
              deckName={deck.name}
              isOpen={isOpenDelete}
              onOpenChange={value => setIsOpenDelete(value)}
              title={'Delete Deck'}
            />
          </div>
        </div>
      </TableDataCell>
    </TableRow>
  )
}
