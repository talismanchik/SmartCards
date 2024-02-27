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
    id: 'clm9uty590gf3vo2qo2u80y81',
    itemsPerPage: +portionSize,
    orderBy: orderByString,
    question: debounceSearch,
  })

  const changeSearchParamsHandler = (field: string, params: string) => {
    if (!params) {
      searchParams.delete(field)
    } else {
      searchParams.set(field, params)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const onChangeSort = (value: Sort) => {
    if (!value || value?.key) {
      changeSearchParamsHandler('orderBy', JSON.stringify(value))
    }
  }

  const onChangeInputValue = (value: string) => {
    changeSearchParamsHandler('question', value)
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
    portionSize,
  }
}
