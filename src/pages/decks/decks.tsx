import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

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
  const name = queryParams.get('name') || ''
  const orderBy = queryParams.get('orderBy')
  const minCardsCount = queryParams.get('minCardsCount') || ''
  const maxCardsCount = queryParams.get('maxCardsCount') || ''

  const parsedOrderBy = () => {
    if (!orderBy) {
      return null
    }
    const [key, direction] = orderBy.split('-') as [string, 'asc' | 'desc']

    if (!key || !direction) {
      return null
    }

    return { direction, key }
  }
  const setOrderBy = (value: Sort) => {
    const query = Object.fromEntries(queryParams)

    setQueryParams({ ...query, orderBy: value ? `${value.key}-${value.direction}` : [] })
  }
  const { data: minMaxCards } = useGetMinMaxCardsQuery()

  const getDeckArgs: GetDecksArgs = {
    maxCardsCount: +maxCardsCount || undefined,
    minCardsCount: +minCardsCount || undefined,
    name: name || undefined,
    orderBy: orderBy ?? undefined,
  }

  const { data, error, isLoading } = useGetDecksQuery(getDeckArgs, {
    skip: !minMaxCards,
  })
  const [createDeck, { isLoading: isDeckBingCreated }] = useCreateDeckMutation()

  const changeFiltersParam = (field: string, value: null | string) => {
    const query = Object.fromEntries(queryParams)

    setQueryParams({ ...query, [field]: value ?? [] })
  }
  const clearFilter = () => {
    setQueryParams({})
  }

  const styles = {
    filterButton: clsx(s.filterButton),
    filters: clsx(s.filtersWrapper),
    pagination: clsx(s.pagination),
    topRow: clsx(s.topRow),
  }

  // ///////////////////////////////////////

  const [page, setPage] = useState(1)
  const [portionSize, setPortionSize] = useState('10')

  const optionsSelect = [
    { title: '20', value: '20' },
    { title: '15', value: '15' },
    { title: '10', value: '10' },
    { title: '5', value: '5' },
  ]

  // ////////////////////////////////////////
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
            createDeck({ name: '🚀 newDeck!' })
          }}
        >
          Create Deck
        </Button>
      </div>
      <Filters
        changeFiltersParam={changeFiltersParam}
        clearFilter={clearFilter}
        maxCardsCount={minMaxCards?.max ?? 100}
        minMaxCards={[+minCardsCount, +maxCardsCount]}
        nameValue={name}
      />
      <TableComponent setSort={setOrderBy} sort={parsedOrderBy()} titles={titles} withOptions>
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
