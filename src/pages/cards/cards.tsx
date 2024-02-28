import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LinkBack } from '@/components/ui/linkBack/linkBack'
import { Pagination } from '@/components/ui/pagination'
import { TableComponent } from '@/components/ui/table/tableComponent'
import { Typography } from '@/components/ui/typography'
import { AddNewDeck } from '@/features/deck/addNewDeck/addNewDeck'
import { columns } from '@/pages/cards/cardsData/columnsData'
import { useCardFilter } from '@/pages/cards/hooks/useCardFilter'
import { TableCards } from '@/pages/cards/tableBody/tableCards'

import s from './cards.module.scss'

import defaultImage from '../../assets/default.png'

// type CardsProps = {
//   id: string
//   isOwner: boolean
//   title: string
// }
export const Cards = () => {
  const isOwner = false

  const {
    currentPage,
    data,
    inputSearch,
    onChangeCurrentPage,
    onChangeInputValue,
    onChangePortionSize,
    onChangeSort,
    portionSize,
    sort,
  } = useCardFilter()

  console.log(data)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.wrapper}>
      <LinkBack />
      <div className={s.titleButtonWrapper}>
        <Typography className={s.title} variant={'h1'}>
          Название deck
        </Typography>
        {isOwner ? (
          <Button>Add New Card</Button>
        ) : (
          <>
            <Button onClick={() => setIsOpen(true)}>Learn Cards</Button>
            <AddNewDeck isOpen={isOpen} onOpenChange={() => setIsOpen(false)} />
          </>
        )}
      </div>

      <div className={s.deckImage}>
        <img alt={'deck-image'} src={defaultImage} />
      </div>
      <Input
        className={s.input}
        clearField={() => onChangeInputValue('')}
        onValueChange={onChangeInputValue}
        placeholder={'Search by question'}
        value={inputSearch}
        variant={'searchDecoration'}
      />

      {data && data.items.length > 0 ? (
        <>
          <TableComponent
            onChangeSort={onChangeSort}
            sort={sort}
            titles={columns}
            withOptions={isOwner}
          >
            {data.items.map(items => {
              return <TableCards cards={items} isOwner={isOwner} key={items.id} />
            })}
          </TableComponent>
          <Pagination
            className={s.pagination}
            currentPage={+currentPage}
            onPageChange={onChangeCurrentPage}
            onValueChange={onChangePortionSize}
            pageSize={+portionSize}
            placeholder={data.pagination.itemsPerPage.toString()}
            totalCount={data.pagination.totalItems}
          />
        </>
      ) : (
        <div className={s.noContent}>No content with these terms...</div>
      )}
    </div>
  )
}
