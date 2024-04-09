import { TableDataCell } from '@/components/ui/table/tableConstructor'
import { Typography } from '@/components/ui/typography'
import { titles } from '@/pages/decks/decks'
import { Deck } from '@/services/decks/decks.types'

type Props = {
  deck: Deck
}
export const DeckMobile = ({ deck }: Props) => {
  return (
    <>
      <TableDataCell>
        {titles.map(el => {
          return (
            <Typography key={el.key} variant={'subtitle2'}>
              {el.title}
            </Typography>
          )
        })}
      </TableDataCell>

      <TableDataCell>
        <Typography variant={'body2'}>{deck.name}</Typography>
        <Typography variant={'body2'}>{deck.cardsCount}</Typography>
        <Typography variant={'body2'}>
          {new Date(deck.updated).toLocaleDateString('ru-RU')}
        </Typography>
        <Typography variant={'body2'}>{deck.author.name}</Typography>
      </TableDataCell>
    </>
  )
}
