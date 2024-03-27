import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LinkBack } from '@/components/ui/linkBack/linkBack'
import { Loader } from '@/components/ui/loader'
import { Pagination } from '@/components/ui/pagination'
import { Spinner } from '@/components/ui/spinner'
import { Column, TableComponent } from '@/components/ui/table/tableComponent'
import { Typography } from '@/components/ui/typography'
import { AddNewCard } from '@/features/card/addNewCard'
import { DropdownCard } from '@/pages/cards/dropdownCard/dropdownCard'
import { useCardFilter } from '@/pages/cards/hooks/useCardFilter'
import { TableCards } from '@/pages/cards/tableBody/tableCards'
import { useGetMeQuery } from '@/services/auth/auth.service'
import { UpdateDeleteDeckArgs } from '@/services/decks/decks.types'
import { useDeleteDeckMutation } from '@/services/decks/decksService'

import s from './cards.module.scss'

import defaultImage from '../../assets/defaultImg.png'

export const Cards = () => {
  const [isOpenAddNewCard, setIsOpenAddNewCard] = useState(false)

  const { deckId } = useParams()
  const navigate = useNavigate()
  const [deleteDeckById] = useDeleteDeckMutation()

  const {
    currentPage,
    data,
    deckData,
    inputSearch,
    isFetching,
    isLoadingDeck,
    isLoadingGetDeck,
    onChangeCurrentPage,
    onChangeInputValue,
    onChangePortionSize,
    onChangeSort,
    portionSize,
    sort,
  } = useCardFilter()

  const { data: meData } = useGetMeQuery()
  const isOwner = deckData?.userId === meData?.id

  if (isLoadingGetDeck || isLoadingDeck) {
    return <Spinner />
  }

  const onOpenChange = (value: boolean) => {
    setIsOpenAddNewCard(value)
  }
  const learnCardsHandler = () => {
    navigate(`/cards/${deckId}/learn`)
  }

  const onDeleteDeck = (id: UpdateDeleteDeckArgs) => {
    if (id) {
      deleteDeckById(id)
      onOpenChange(false)
      navigate(-1)
    }
  }

  return (
    <>
      {isFetching && <Loader />}
      <div className={s.wrapper}>
        <LinkBack />
        <div className={s.titleButtonWrapper}>
          <div className={s.titleDropWrap}>
            <Typography className={s.title} variant={'h1'}>
              {deckData?.name}
            </Typography>
            {isOwner && (
              <DropdownCard
                deckData={deckData}
                learnCards={learnCardsHandler}
                onDeleteDeck={onDeleteDeck}
              />
            )}
          </div>

          {isOwner ? (
            <Button className={s.button} onClick={() => setIsOpenAddNewCard(true)}>
              Add New Card
            </Button>
          ) : (
            data &&
            data.items.length > 0 && (
              <Button className={s.button} onClick={learnCardsHandler}>
                Learn Cards
              </Button>
            )
          )}
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
        {isOpenAddNewCard && (
          <AddNewCard
            deckId={deckId ?? ''}
            isOpen={isOpenAddNewCard}
            onOpenChange={onOpenChange}
            title={'Add New Card'}
          />
        )}
      </div>
    </>
  )
}

const columns: Column[] = [
  {
    key: 'question',
    style: s.questionStyle,
    title: 'Question',
  },
  {
    key: 'answer',
    style: s.answerStyle,
    title: 'Answer',
  },
  {
    key: 'updated',
    style: s.updatedStyle,
    title: 'Last Updated',
  },
  {
    key: 'grade',
    style: s.gradeStyle,
    title: 'Grade',
  },
]
