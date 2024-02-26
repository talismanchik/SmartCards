import { useSearchParams } from 'react-router-dom'

import { useDebounce } from '@/components/hooks/useDebounce'
import { useOrderByString } from '@/components/hooks/useOrderByString'
import { Sort } from '@/components/ui/table/tableComponent'
import { useGetDecksByIDQuery } from '@/services/cards/cardsService'

export const useCardFilter = () => {
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

  return {
    currentPage,
    data,
    inputSearch,
    onChangeCurrentPage,
    onChangeInputValue,
    onChangePortionSize,
    onChangeSort,
    orderBy,
  }
}
