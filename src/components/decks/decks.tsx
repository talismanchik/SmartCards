import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Input } from '@/components/ui/input'
import { Column, Sort, TableComponent } from '@/components/ui/table/tableComponent'
import { TableDataCell, TableRow } from '@/components/ui/table/tableConstructor'
import { Typography } from '@/components/ui/typography'
import { useDebounce } from '@/hooks/useDebounce'
import {
  Deck,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
} from '@/services/base-api'

import s from '@/components/ui/table/table.module.scss'

const columns: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'author.name',
    title: 'Created by',
  },
  {
    key: '',
    title: '',
  },
]

export const Decks = () => {
  const [search, setSearch] = useState('')
  const [orderBy, setOrderBy] = useState<Sort | null>(null)
  const debouncedValue = useDebounce<string>(search, 500)
  const sortedString = useMemo(() => {
    if (!orderBy) {
      return null
    }

    return `${orderBy.key}-${orderBy.direction}`
  }, [orderBy])

  const { data, error, isLoading } = useGetDecksQuery({
    name: debouncedValue,
    orderBy: sortedString,
  })
  const [createDeck, { isLoading: isLoadingCreateDeck }] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()

  console.log(data)

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h2>ERROR: {JSON.stringify(error)}</h2>
  }

  const dataMap = data?.items.map((item: Deck) => {
    return (
      <TableRow key={item.id}>
        <TableDataCell>
          <Typography variant={'body2'}>{item.name}</Typography>
        </TableDataCell>
        <TableDataCell>
          <Typography variant={'body2'}>{item.cardsCount}</Typography>
        </TableDataCell>
        <TableDataCell>
          <Typography variant={'body2'}>
            {new Date(item.updated).toLocaleDateString('ru-RU')}
          </Typography>
        </TableDataCell>
        <TableDataCell>
          <Typography variant={'body2'}>{item.author.name}</Typography>
        </TableDataCell>
        <TableDataCell>
          <div className={s.iconContainer} onClick={() => deleteDeck({ id: item.id })}>
            <Icon iconId={'play_circle_outline'} />
          </div>
        </TableDataCell>
      </TableRow>
    )
  })

  return (
    <div style={{ margin: '0 auto', maxWidth: '1280px', padding: '27px 137px' }}>
      <Input
        onValueChange={setSearch}
        placeholder={'Search'}
        value={search}
        variant={'searchDecoration'}
      />
      <Button
        disabled={isLoadingCreateDeck}
        onClick={() =>
          createDeck({
            name: 'new deck 💻',
          })
        }
      >
        Create Deck
      </Button>

      <TableComponent
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        titles={columns}
        withOptions={false}
      >
        {dataMap}
      </TableComponent>
    </div>
  )
}
