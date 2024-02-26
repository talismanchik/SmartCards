import { Link, useSearchParams } from 'react-router-dom'

import { useDebounce } from '@/components/hooks/useDebounce'
import { useOrderByString } from '@/components/hooks/useOrderByString'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { Column, Sort, TableComponent } from '@/components/ui/table/tableComponent'
import { Typography } from '@/components/ui/typography'
import { TableCards } from '@/pages/cards/tableBody/tableCards'
import { useGetDecksByIDQuery } from '@/services/cards/cardsService'

import s from './cards.module.scss'

import defaultImage from '../../assets/default.png'

// type CardsProps = {
//   id: string
//   isOwner: boolean
//   title: string
// }
export const Cards = () => {
  const isOwner = true
  const [searchParams, setSearchParams] = useSearchParams({})
  const orderBy = JSON.parse(searchParams.get('orderBy') || '""')
  const inputSearch = searchParams.get('question') || ''
  const currentPage = searchParams.get('currentPage') || '1'
  const portionSize = searchParams.get('itemsPerPage') || '5'

  const debounceSearch = useDebounce(inputSearch, 500)

  const orderByString = useOrderByString(orderBy)

  const { data } = useGetDecksByIDQuery({
    currentPage: +currentPage,
    id: 'cls3s7drs035wrr2ufg2v1ik1',
    itemsPerPage: +portionSize,
    orderBy: orderByString,
    question: debounceSearch,
  })

  const onChangeSort = (value: Sort) => {
    searchParams.set('orderBy', JSON.stringify(value))
    setSearchParams(searchParams)
  }

  const onChangeInputValue = (value: string) => {
    searchParams.set('question', value)
    setSearchParams(searchParams)
  }
  const onChangeCurrentPage = (page: number) => {
    searchParams.set('currentPage', page.toString())
    setSearchParams(searchParams)
  }

  const onChangePortionSize = (portion: string) => {
    searchParams.set('itemsPerPage', portion)
    setSearchParams(searchParams)
  }

  console.log(data)

  return (
    <div className={s.wrapper}>
      <Link className={s.previousPage} to={''}>
        <Icon iconId={'arrow_back_outline'} />
        Return to Previous Page
      </Link>
      <div className={s.titleButtonWrapper}>
        <Typography className={s.title} variant={'h1'}>
          Название deck
        </Typography>
        {isOwner ? <Button>Add New Card</Button> : <Button>Learn to Deck</Button>}
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

      {data && (
        <>
          <TableComponent setSort={onChangeSort} sort={orderBy} titles={columns} withOptions>
            <TableCards cards={data.items} />
          </TableComponent>
          <Pagination
            className={s.pagination}
            currentPage={+currentPage}
            onPageChange={onChangeCurrentPage}
            onValueChange={onChangePortionSize}
            pageSize={data.pagination.itemsPerPage}
            placeholder={data.pagination.itemsPerPage.toString()}
            totalCount={data.pagination.totalItems}
          />
        </>
      )}
    </div>
  )
}

const columns: Column[] = [
  {
    key: 'question',
    title: 'Question',
  },
  {
    key: 'answer',
    title: 'Answer',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'grade',
    title: 'Grade',
  },
]
