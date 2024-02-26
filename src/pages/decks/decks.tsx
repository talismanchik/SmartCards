import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useOrderByString } from '@/components/hooks/useOrderByString'
import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { TabItem } from '@/components/ui/tabSwitcher'
import { Column, Sort, TableComponent } from '@/components/ui/table/tableComponent'
import { Typography } from '@/components/ui/typography'
import { Filters } from '@/pages/decks/filters/filters'
import { TableDecks } from '@/pages/decks/tableBody/tableDecks'
import { GetDecksArgs } from '@/services/decks/decks.types'
import {
  useCreateDeckMutation,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
} from '@/services/decks/decksService'
import clsx from 'clsx'

import s from './decks.module.scss'

export const Decks = () => {
  const [queryParams, setQueryParams] = useSearchParams()
  //const [cardsCount, setCardsCount] = useState<number[]>([1, 100])
  //const [orderBy, setOrderBy] = useState<Sort>(null)
  const orderBy = JSON.parse(queryParams.get('orderBy') ?? 'null')
  const name = queryParams.get('name') || ''
  const setOrderBy = (value: Sort) => {
    queryParams.set('orderBy', JSON.stringify(value))
    setQueryParams(queryParams)
  }
  const orderByString = useOrderByString(orderBy)

  //const debouncedSearch = useDebounce(name, 500)
  const { data: minMaxCards } = useGetMinMaxCardsQuery()

  //const [getDeckArgs, setGetDeckArgs] = useState<GetDecksArgs>({name:debouncedSearch})
  const getDeckArgs: GetDecksArgs = {
    //maxCardsCount: cardsCount[1],
    // minCardsCount: cardsCount[0],
    name: name,
    orderBy: orderByString,
  }

  const { data, error, isLoading } = useGetDecksQuery(getDeckArgs, {
    skip: !minMaxCards,
  })
  const [createDeck, { isLoading: isDeckBingCreated }] = useCreateDeckMutation()

  const changeFiltersParams = (value: string) => {
    setQueryParams({ name: value })
  }
  const clearFilter = () => {
    setQueryParams({ name: '' })
    queryParams.delete(name)
  }

  const styles = {
    filterButton: clsx(s.filterButton),
    filters: clsx(s.filtersWrapper),
    pagination: clsx(s.pagination),
    topRow: clsx(s.topRow),
  }

  // @@@@@@@@@@@@@@@@@@@@@@@@@

  const [page, setPage] = useState(1)
  const [portionSize, setPortionSize] = useState('50')

  const optionsSelect = [
    { title: '50', value: '50' },
    { title: '20', value: '20' },
    { title: '10', value: '10' },
  ]

  //@@@@@@@@@@@@@@@@@@@@@@@@
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error: {JSON.stringify(error)}...</h1>
  }

  return (
    <>
      <div className={styles.topRow}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button
          disabled={isDeckBingCreated}
          onClick={() => {
            createDeck({ name: '🚀 newDeck' })
          }}
        >
          Create Deck
        </Button>
      </div>
      <Filters
        changeFiltersParams={changeFiltersParams}
        clearFilter={clearFilter}
        nameValue={name}
      />
      <TableComponent setSort={setOrderBy} sort={orderBy} titles={titles} withOptions>
        {data && <TableDecks decks={data.items} />}
      </TableComponent>
      <Pagination
        className={styles.pagination}
        currentPage={page}
        onPageChange={pageNumber => setPage(pageNumber)}
        onValueChange={value => setPortionSize(value)}
        options={optionsSelect}
        pageSize={+portionSize}
        placeholder={portionSize}
        totalCount={200}
      />{' '}
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

export const tabSwitcherItems: TabItem[] = [
  {
    title: 'My Cards',
    value: 'myCards',
  },
  {
    title: 'All Cards',
    value: 'allCards',
  },
]
