import { useMemo } from 'react'

import { createRangeArray } from '@/common/utils/createRangeArray'

type Props = {
  currentPage: number
  siblingCount: number
  totalPageCount: number
}

//www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
/**
 Generates an array of pagination elements.
 @param  props - The props object.
 @param  props.totalPageCount - The total number of pages.
 @param props.currentPage - The current page.
 @param  [props.siblingCount=1] - The number of siblings (pages) to display on each side of the current page.
 @returns An array of pagination elements.
 */

export const usePagination = ({ currentPage, siblingCount = 1, totalPageCount }: Props) => {
  return useMemo(() => {
    const DOTS = '...'

    /**
     (totalPageNumbers) The maximum number of pages to display in the pagination array.
     It is calculated as the sum of siblingCount (number of siblings on each side of the current page),
     plus 5 additional elements: first page, last page, current page, and two dots representing skipped pages.
     */
    const totalPageNumbers = siblingCount + 5

    if (totalPageNumbers >= totalPageCount) {
      return createRangeArray(1, totalPageCount)
    }

    const leftSiblingIndex = currentPage - siblingCount <= 1 ? 1 : currentPage - siblingCount
    const rightSiblingIndex =
      currentPage + siblingCount >= totalPageCount ? totalPageCount : currentPage + siblingCount

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = createRangeArray(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = createRangeArray(totalPageCount - rightItemCount + 1, totalPageCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = createRangeArray(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalPageCount, currentPage, siblingCount])
}
