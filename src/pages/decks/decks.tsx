import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useDebounce } from '@/components/hooks/useDebounce'
import { useOrderByString } from '@/components/hooks/useOrderByString'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { TabItem, TabSwitcher } from '@/components/ui/tabSwitcher'
import { Column, Sort, TableComponent } from '@/components/ui/table/tableComponent'
import { Typography } from '@/components/ui/typography'
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
  const [search, setSearch] = useSearchParams()
  const [name, setName] = useState<string>('')
  const [cardsCount, setCardsCount] = useState<number[]>([1, 100])
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
    },
    500
  )
  const { data: minMaxCards } = useGetMinMaxCardsQuery()

  const { data, error, isLoading } = useGetDecksQuery({
    ...debouncedSearch,
    orderBy: orderByString,
  })
  const [createDeck, { isLoading: isDeckBingCreated }] = useCreateDeckMutation()

  const styles = {
    filterButton: clsx(s.filterButton),
    filters: clsx(s.filtersWrapper),
    pagination: clsx(s.pagination),
    topRow: clsx(s.topRow),
  }

  // @@@@@@@@@@@@@@@@@@@@@@@@@
  const [tab, setTab] = useState('allCards')
  const zaglushka = (value: string) => {
    setTab(value)
  }

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
      <div className={styles.filters}>
        <Input
          clearField={() => setName('')}
          onValueChange={setName}
          placeholder={'Input search'}
          value={name}
          variant={'searchDecoration'}
        />
        <TabSwitcher
          items={tabSwitcherItems}
          label={'Show decks cards'}
          onValueChange={zaglushka}
          value={tab}
        />
        <Slider
          label={'Number of cards'}
          maxValue={minMaxCards?.max}
          onValueChange={setCardsCount}
          values={cardsCount}
        />
        <Button className={styles.filterButton} variant={'secondary'}>
          <Icon iconId={'trash_outline'} />
          <Typography variant={'subtitle2'}>Clear Filter</Typography>
        </Button>
      </div>
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

const tabSwitcherItems: TabItem[] = [
  {
    title: 'My Cards',
    value: 'myCards',
  },
  {
    title: 'All Cards',
    value: 'allCards',
  },
]
