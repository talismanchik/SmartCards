import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LinkBack } from '@/components/ui/linkBack/linkBack'
import { Pagination } from '@/components/ui/pagination'
import { TableComponent } from '@/components/ui/table/tableComponent'
import { Typography } from '@/components/ui/typography'
import { DeleteDeck } from '@/features/deck/deleteDeck'
import { UpdateDeck } from '@/features/deck/updateDeck'
import { columns } from '@/pages/cards/cardsData/columnsData'
import { useCardFilter } from '@/pages/cards/hooks/useCardFilter'
import { TableCards } from '@/pages/cards/tableBody/tableCards'
import { useGetDecksByIDCardsQuery } from '@/services/cards/cardsService'
import { UpdateDeleteDeckArgs } from '@/services/decks/decks.types'

import s from './cards.module.scss'

import defaultImage from '../../assets/default.png'

// type CardsProps = {
//   id: string
//   isOwner: boolean
//   title: string
// }
export const Cards = () => {
  const isOwner = false

  const { deckId } = useParams()

  const {
    currentPage,
    debounceSearch,
    deckData,
    inputSearch,
    onChangeCurrentPage,
    onChangeInputValue,
    onChangePortionSize,
    onChangeSort,
    orderBy,
    portionSize,
    sort,
  } = useCardFilter()

  const { data } = useGetDecksByIDCardsQuery({
    currentPage: +currentPage,
    id: deckId || '',
    itemsPerPage: +portionSize,
    orderBy: orderBy,
    question: debounceSearch,
  })

  console.log(data)
  const [isOpenDelete, setIsOpenDelete] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const deleteId: UpdateDeleteDeckArgs = {
    id: 'clt9mxg8u00pd2l2gi9mlnei3', //deckId
  }

  return (
    <div className={s.wrapper}>
      <LinkBack />
      <div className={s.titleButtonWrapper}>
        <Typography className={s.title} variant={'h1'}>
          {deckData?.name}
        </Typography>
        {isOwner ? <Button>Add New Card</Button> : <Button>Learn Cards</Button>}
      </div>

      <div className={s.deckImage}>
        {deckData?.cover ? (
          <img alt={'question-image'} src={deckData?.cover} />
        ) : (
          <img alt={'default-image'} src={defaultImage} />
        )}
      </div>
      <Input
        className={s.input}
        clearField={() => onChangeInputValue('')}
        onValueChange={onChangeInputValue}
        placeholder={'Search by question'}
        value={inputSearch}
        variant={'searchDecoration'}
      />
      <div>
        <Button onClick={() => setIsOpenDelete(true)} variant={'secondary'}>
          Delete Deck
        </Button>
        <DeleteDeck
          deckId={deleteId}
          isOpen={isOpenDelete}
          onOpenChange={value => setIsOpenDelete(value)}
          title={'Delete Deck'}
        />
      </div>
      <div>
        <Button onClick={() => setIsOpenUpdate(true)}>Update Deck</Button>
        <UpdateDeck
          isOpen={isOpenUpdate}
          onOpenChange={value => setIsOpenUpdate(value)}
          title={'Update Deck'}
        />
      </div>

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
