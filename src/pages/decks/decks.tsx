import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Loader } from '@/components/ui/loader'
import { Pagination } from '@/components/ui/pagination'
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
    getDecksData,
    getDecksError,
    isFetching,
    itemsPerPage,
    onChangeSort,
    sort,
  } = useDecksFilter()

  const { data: meData } = useGetMeQuery()
  const myId = meData?.id
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const notIsEmpty = getDecksData && getDecksData.items.length > 0

  const styles = {
    filterButton: clsx(s.filterButton),
    filters: clsx(s.filtersWrapper),
    pagination: clsx(s.pagination),
    topRow: clsx(s.topRow),
  }

  if (getDecksError) {
    return <h1>Error: {JSON.stringify(getDecksError)}...</h1>
  }
  const learnDeckHandler = (id: string) => {
    navigate(`/cards/${id}/learn`)
  }

  return (
    <>
      {isFetching && <Loader />}
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
        {notIsEmpty ? (
          <>
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
            <Pagination
              className={styles.pagination}
              currentPage={+currentPage}
              onPageChange={pageNumber => changeFiltersParam('currentPage', pageNumber + '')}
              onValueChange={value => changeFiltersParam('itemsPerPage', value)}
              pageSize={+itemsPerPage}
              placeholder={getDecksData.pagination.itemsPerPage + ''}
              totalCount={getDecksData.pagination.totalItems}
            />
          </>
        ) : (
          <div className={s.noContent}>No content with these terms...</div>
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
