import { useParams, useSearchParams } from 'react-router-dom'

import { useDebounce } from '@/components/hooks/useDebounce'
import { useParsedOrderBy } from '@/components/hooks/useParsedOrderBy'
import { useGetDeckQuery, useGetDecksByIDCardsQuery } from '@/services/cards/cardsService'

export const useCardFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams({})
  const orderBy = searchParams.get('orderBy')
  const inputSearch = searchParams.get('question') || ''
  const currentPage = searchParams.get('currentPage') || '1'
  const portionSize = searchParams.get('itemsPerPage') || '5'
  const sort = useParsedOrderBy(orderBy)

  const debounceSearch = useDebounce(inputSearch, 500)

  const { deckId } = useParams()

  const {
    data,
    isFetching,
    isLoading: isLoadingGetDeck,
  } = useGetDecksByIDCardsQuery({
    currentPage: +currentPage,
    id: deckId || '',
    itemsPerPage: +portionSize,
    orderBy: orderBy,
    question: debounceSearch,
  })

  const { data: deckData, isLoading: isLoadingDeck } = useGetDeckQuery({
    id: deckId || '',
  })

  const changeFiltersParam = (field: string, value: null | string) => {
    const query = Object.fromEntries(searchParams)

    if (field !== 'currentPage') {
      setSearchParams({ ...query, currentPage: '1', [field]: value ?? [] }, { replace: true })
    } else {
      setSearchParams({ ...query, [field]: value ?? [] }, { replace: true })
    }
  }

  const onChangeSort = (key: string) => {
    if (sort && sort.key === key) {
      changeFiltersParam('orderBy', sort.direction === 'asc' ? `${sort.key}-desc` : null)
    } else {
      changeFiltersParam('orderBy', `${key}-asc`)
    }
  }

  const onChangeInputValue = (value: string) => {
    changeFiltersParam('question', value)
  }
  const onChangeCurrentPage = (page: number) => {
    changeFiltersParam('currentPage', page.toString())
  }

  const onChangePortionSize = (portion: string) => {
    changeFiltersParam('itemsPerPage', portion)
  }

  return {
    currentPage,
    data,
    debounceSearch,
    deckData,
    inputSearch,
    isFetching,
    isLoadingDeck,
    isLoadingGetDeck,
    onChangeCurrentPage,
    onChangeInputValue,
    onChangePortionSize,
    onChangeSort,
    orderBy,
    portionSize,
    sort,
  }
}
