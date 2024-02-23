import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useDebounce } from '@/components/hooks/useDebounce'
import { useOrderByString } from '@/components/hooks/useOrderByString'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Column, Sort, TableComponent } from '@/components/ui/table/tableComponent'
import { TableDecks } from '@/pages/decks/tableBody/tableDecks'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks/decksApi'
import { GetDecksArgs } from '@/services/decks/decksTypes'

export const Decks = () => {
  const [search, setSearch] = useSearchParams()
  const [name, setName] = useState<string>('')
  const [cardsCount, setCardsCount] = useState<number[]>([0, 100])
  //const [orderBy, setOrderBy] = useState<Sort>(null)
  const orderBy = JSON.parse(search.get('orderBy') ?? 'null')
  const setOrderBy = (value: Sort) => {
    search.set('orderBy', JSON.stringify(value))
    setSearch(search)
  }
  const orderByString = useOrderByString(orderBy)

  const debouncedSearch = useDebounce<GetDecksArgs>(
    {
      maxCardsCount: cardsCount[1],
      minCardsCount: cardsCount[0],
      name: name,
      orderBy: orderByString,
    },
    500
  )
  const { data, error, isLoading } = useGetDecksQuery(debouncedSearch)
  const [createDeck, { isLoading: isDeckBingCreated }] = useCreateDeckMutation()

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error: {JSON.stringify(error)}...</h1>
  }

  return (
    <>
      <Button
        disabled={isDeckBingCreated}
        onClick={() => {
          createDeck({ name: '🚀 newDeck' })
        }}
      >
        Create Deck
      </Button>
      <div>
        <Input
          clearField={() => setName('')}
          label={'Search'}
          onValueChange={setName}
          value={name}
          variant={'searchDecoration'}
        />
        <Slider onValueChange={setCardsCount} values={cardsCount} />
      </div>
      <TableComponent setSort={setOrderBy} sort={orderBy} titles={titles} withOptions>
        {data && <TableDecks decks={data.items} />}
      </TableComponent>
    </>
  )
}

const titles: Column[] = [
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
    key: 'created',
    title: 'Created by',
  },
]
