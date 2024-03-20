import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { Spinner } from '@/components/ui/spinner'
import { TabItem } from '@/components/ui/tabSwitcher'
import { Column, TableComponent } from '@/components/ui/table/tableComponent'
import { Typography } from '@/components/ui/typography'
import { AddNewDeck } from '@/features/deck/addNewDeck'
import { Filters } from '@/pages/decks/filters/filters'
import { useDecksFilter } from '@/pages/decks/hooks/useDecksFilter'
import { TableDecks } from '@/pages/decks/tableBody/tableDecks'
import { useGetMeQuery } from '@/services/auth/auth.service'
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
    onChangeSort,
    sort,
  } = useDecksFilter()

  const { data: meData } = useGetMeQuery()
  const myId = meData?.id
  const [isOpen, setIsOpen] = useState(false)
  const pagination = getDecksData?.pagination
  const navigate = useNavigate()

  const styles = {
    filterButton: clsx(s.filterButton),
    filters: clsx(s.filtersWrapper),
    pagination: clsx(s.pagination),
    topRow: clsx(s.topRow),
  }

  if (decksIsLoading || minMaxCardsLoading) {
    return <Spinner />
  }
  if (getDecksError) {
    return <h1>Error: {JSON.stringify(getDecksError)}...</h1>
  }
  const learnDeckHandler = (id: string) => {
    navigate(`/cards/${id}/learn`)
  }

  return (
    <>
      <div className={styles.topRow}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button onClick={() => setIsOpen(true)}>Add New Deck</Button>
        <AddNewDeck
          isOpen={isOpen}
          onOpenChange={value => setIsOpen(value)}
          title={'Add New Deck'}
        />
      </div>
      <>
        <Filters />
        <TableComponent onChangeSort={onChangeSort} sort={sort} titles={titles} withOptions>
          {getDecksData?.items.map(item => {
            return (
              <TableDecks
                deck={item}
                key={item.id}
                learnDeckHandler={learnDeckHandler}
                myId={myId}
              />
            )
          })}
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
    style: s.nameStyle,
    title: 'Name',
  },
  {
    key: 'cardsCount',
    style: s.cardsCountStyle,
    title: 'Cards',
  },
  {
    key: 'updated',
    style: s.updatedStyle,
    title: 'Last Updated',
  },
  {
    key: 'created',
    style: s.createdStyle,
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
