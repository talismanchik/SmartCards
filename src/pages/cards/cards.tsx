// import s from './cardsService.ts.module.scss'

import { Link, useSearchParams } from 'react-router-dom'

import { useDebounce } from '@/components/hooks/useDebounce'
import { useOrderByString } from '@/components/hooks/useOrderByString'
import { Icon } from '@/components/ui/icon/Icon'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { Column, Sort, TableComponent } from '@/components/ui/table/tableComponent'
import { TableDataCell, TableRow } from '@/components/ui/table/tableConstructor'
import { Typography } from '@/components/ui/typography'
import { DecksByIDItems } from '@/services/cards/cards.types'
import { useGetDecksByIDQuery } from '@/services/cards/cardsService'

export const Cards = () => {
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

  const dataMap = data?.items.map((item: DecksByIDItems) => {
    return (
      <TableRow key={item.id}>
        <TableDataCell>
          <Typography variant={'body2'}>{item.question}</Typography>
        </TableDataCell>
        <TableDataCell>
          <Typography variant={'body2'}>{item.answer}</Typography>
        </TableDataCell>
        <TableDataCell>
          <Typography variant={'body2'}>
            {new Date(item.updated).toLocaleDateString('ru-RU')}
          </Typography>
        </TableDataCell>
        <TableDataCell>
          <Typography variant={'body2'}>
            <Icon iconId={'star_outline'} />
          </Typography>
        </TableDataCell>
        {/*<TableDataCell>*/}
        {/*  <div className={s.iconContainer} onClick={() => deleteDeck({ id: item.id })}>*/}
        {/*    <Icon iconId={'play_circle_outline'} />*/}
        {/*  </div>*/}
        {/*</TableDataCell>*/}
      </TableRow>
    )
  })

  return (
    <>
      <Link to={''}>
        <Icon iconId={'arrow_back_outline'} />
        Return to Previous Page
      </Link>
      <Typography variant={'h1'}>Название deck</Typography>
      <Input
        clearField={() => onChangeInputValue('')}
        onValueChange={onChangeInputValue}
        placeholder={'Search by question'}
        value={inputSearch}
        variant={'searchDecoration'}
      />
      <TableComponent setSort={onChangeSort} sort={orderBy} titles={columns}>
        {dataMap}
      </TableComponent>
      {data && (
        <Pagination
          currentPage={+currentPage}
          onPageChange={onChangeCurrentPage}
          onValueChange={onChangePortionSize}
          pageSize={data.pagination.itemsPerPage}
          placeholder={data.pagination.itemsPerPage.toString()}
          totalCount={data.pagination.totalItems}
        />
      )}
    </>
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
