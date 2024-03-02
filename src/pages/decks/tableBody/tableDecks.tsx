import { useNavigate } from 'react-router-dom'

import defaultImage from '@/assets/default.png'
import { Icon } from '@/components/ui/icon/Icon'
import { TableDataCell, TableRow } from '@/components/ui/table/tableConstructor'
import { Typography } from '@/components/ui/typography'
import { Deck } from '@/services/decks/decks.types'
import { useDeleteDeckMutation } from '@/services/decks/decksService'
import clsx from 'clsx'

import s from '@/components/ui/table/table.module.scss'

type props = {
  decks: Deck[]
}

export const TableDecks = ({ decks }: props) => {
  const navigate = useNavigate()
  const onLinkToCards = (id: string) => {
    navigate(`/cards/${id}`)
  }

  const styles = {
    iconWrapper: clsx(s.iconWrapper),
    nameWrapper: clsx(s.nameWrapper),
  }
  const [deleteDeck] = useDeleteDeckMutation()

  return (
    <>
      {decks.map(deck => {
        const deleteDeckHandler = () => {
          deleteDeck({ id: deck.id })
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
                <button className={styles.iconWrapper}>
                  <Icon iconId={'edit_outline'} />
                </button>
                <a className={styles.iconWrapper}>
                  <Icon iconId={'play_circle_outline'} />
                </a>
                <button className={styles.iconWrapper} onClick={deleteDeckHandler}>
                  <Icon iconId={'trash_outline'} />
                </button>
              </div>
            </TableDataCell>
          </TableRow>
        )
      })}
    </>
  )
}
