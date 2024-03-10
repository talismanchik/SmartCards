import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useDebounce } from '@/components/hooks/useDebounce'
import { useParsedOrderBy } from '@/components/hooks/useParsedOrderBy'
import { fieldGetDecksArgs } from '@/services/decks/decks.types'
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/services/decks/decksService'

export const useDecksFilter = () => {
  //debugger
  const { data: minMaxCards, isLoading: minMaxCardsLoading } = useGetMinMaxCardsQuery()

  const [queryParams, setQueryParams] = useSearchParams({})
  const deckName = queryParams.get('name') || ''
  const orderBy = queryParams.get('orderBy')
  const authorId = queryParams.get('authorId')
  const minCardsCount = queryParams.get('minCardsCount') || minMaxCards?.min || ''
  const maxCardsCount = queryParams.get('maxCardsCount') || minMaxCards?.max || ''
  const currentPage = queryParams.get('currentPage') || '1'
  const itemsPerPage = queryParams.get('itemsPerPage') || '10'
  const sort = useParsedOrderBy(orderBy)

  const debounceDeckName = useDebounce(deckName, 500)

  const {
    data: getDecksData,
    error: getDecksError,
    isLoading: decksIsLoading,
  } = useGetDecksQuery(
    {
      authorId: authorId || undefined,
      currentPage: +currentPage,
      itemsPerPage: +itemsPerPage,
      maxCardsCount: +maxCardsCount || undefined,
      minCardsCount: +minCardsCount || undefined,
      name: debounceDeckName || undefined,
      orderBy: orderBy ?? undefined,
    },
    {
      skip: !minMaxCards,
    }
  )

  useEffect(() => {
    console.log(minMaxCards)
  }, [minMaxCards])

  const onChangeSort = (key: string) => {
    if (sort && sort.key === key) {
      changeFiltersParam('orderBy', sort.direction === 'asc' ? `${sort.key}-desc` : null)
    } else {
      changeFiltersParam('orderBy', `${key}-asc`)
    }
  }
  const changeFiltersParam = (field: fieldGetDecksArgs, value: null | string) => {
    const query = Object.fromEntries(queryParams)

    //setQueryParams({ ...query, [field]: value ?? [] })
    if (field !== 'currentPage') {
      setQueryParams({ ...query, currentPage: [], [field]: value ?? [] })
    } else {
      setQueryParams({ ...query, [field]: value ?? [] })
    }
  }
  const change = (arr: number[]) => {
    const query = Object.fromEntries(queryParams)

    setQueryParams({
      ...query,
      currentPage: [],
      maxCardsCount: arr[1].toString(),
      minCardsCount: arr[0].toString(),
    })
  }
  const clearFilter = () => {
    setQueryParams({})
  }

  return {
    authorId,
    change,
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
    onChangeSort,
    orderBy,
    queryParams,
    setQueryParams,
    sort,
  }
}
