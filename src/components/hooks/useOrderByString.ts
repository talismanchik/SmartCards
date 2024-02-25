import { useMemo } from 'react'

import { Sort } from '@/components/ui/table/tableComponent'

export const useOrderByString = (orderBy: Sort) => {
  return useMemo(() => {
    if (!orderBy) {
      return null
    }

    return `${orderBy.key}-${orderBy.direction}`
  }, [orderBy])
}
