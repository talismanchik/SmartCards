import { useSearchParams } from 'react-router-dom'

import { useParsedOrderBy } from '@/components/hooks/useParsedOrderBy'
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/services/decks/decksService'

export const useDecksFilter = () => {
  const { data: minMaxCards, isLoading: minMaxCardsLoading } = useGetMinMaxCardsQuery()

  const [queryParams, setQueryParams] = useSearchParams({})
  const deckName = queryParams.get('name') || ''
  const orderBy = queryParams.get('orderBy')
  const minCardsCount = queryParams.get('minCardsCount') || minMaxCards?.min || ''
  const maxCardsCount = queryParams.get('maxCardsCount') || minMaxCards?.max || ''
  const currentPage = queryParams.get('currentPage') || '1'
  const itemsPerPage = queryParams.get('itemsPerPage') || '10'
  const sort = useParsedOrderBy(orderBy)
  const {
    data: getDecksData,
    error: getDecksError,
    isLoading: decksIsLoading,
  } = useGetDecksQuery(
    {
      currentPage: +currentPage,
      itemsPerPage: +itemsPerPage,
      maxCardsCount: +maxCardsCount || undefined,
      minCardsCount: +minCardsCount || undefined,
      name: deckName || undefined,
      orderBy: orderBy ?? undefined,
    },
    {
      skip: !minMaxCards,
    }
  )
  const changeFiltersParam = (field: string, value: null | string) => {
    const query = Object.fromEntries(queryParams)

    setQueryParams({ ...query, [field]: value ?? [] })
  }
  const clearFilter = () => {
    setQueryParams({})
  }

  return {
    changeFiltersParam,
    clearFilter,
    currentPage,
    deckName,
    decksIsLoading,
    getDecksData,
    getDecksError,
    itemsPerPage,
    maxCardsCount,
    minCardsCount,
    minMaxCards,
    minMaxCardsLoading,
    orderBy,
    queryParams,
    setQueryParams,
    sort,
  }
}
