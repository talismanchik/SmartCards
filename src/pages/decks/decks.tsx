import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { TabItem } from '@/components/ui/tabSwitcher'
import { Column, TableComponent } from '@/components/ui/table/tableComponent'
import { Typography } from '@/components/ui/typography'
import { Filters } from '@/pages/decks/filters/filters'
import { useDecksFilter } from '@/pages/decks/hooks/useDecksFilter'
import { TableDecks } from '@/pages/decks/tableBody/tableDecks'
import { useCreateDeckMutation } from '@/services/decks/decksService'
import clsx from 'clsx'

import s from './decks.module.scss'

export const Decks = () => {
  const {
    changeFiltersParam,
    currentPage,
    decksIsLoading,
    getDecksData,
    getDecksError,
    itemsPerPage,
    minMaxCardsLoading,
  } = useDecksFilter()

  const pagination = getDecksData?.pagination
  const [createDeck, { isLoading: isDeckBingCreated }] = useCreateDeckMutation()

  const styles = {
    filterButton: clsx(s.filterButton),
    filters: clsx(s.filtersWrapper),
    pagination: clsx(s.pagination),
    topRow: clsx(s.topRow),
  }

  if (decksIsLoading || minMaxCardsLoading) {
    return <h1>Loading...</h1>
  }
  if (getDecksError) {
    return <h1>Error: {JSON.stringify(getDecksError)}...</h1>
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
      <>
        <Filters />
        <TableComponent titles={titles} withOptions>
          {getDecksData && <TableDecks decks={getDecksData.items} />}
        </TableComponent>
        {pagination && (
          <Pagination
            className={styles.pagination}
            currentPage={+currentPage}
            onPageChange={pageNumber => changeFiltersParam('currentPage', pageNumber + '')}
            onValueChange={value => changeFiltersParam('itemsPerPage', value)}
            pageSize={+itemsPerPage}
            placeholder={pagination.itemsPerPage + ''}
            totalCount={pagination.totalItems}
          />
        )}
      </>
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
