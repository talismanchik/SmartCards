import { Icon } from '@/components/ui/icon/Icon'
import { TableDataCell, TableRow } from '@/components/ui/table/tableConstructor'
import { Typography } from '@/components/ui/typography'
import { Deck } from '@/services/decks/decksTypes'

import s from '@/components/ui/table/table.module.scss'

type props = {
  decks: Deck[]
}

export const TableDecks = ({ decks }: props) => {
  return (
    <>
      {decks.map(deck => {
        return (
          <TableRow key={deck.id}>
            <TableDataCell>
              <Typography variant={'body2'}>{deck.name}</Typography>
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
                <Icon iconId={'play_circle_outline'} />
              </div>
            </TableDataCell>
          </TableRow>
        )
      })}
    </>
  )
}
