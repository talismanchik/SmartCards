import { usePagination } from '@/components/ui/pagination/usePagination'
import { Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

type PaginationProps = {
  currentPage: number
  onPageChange: (pageNumber: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
}

export const Pagination = ({
  currentPage,
  onPageChange,
  pageSize,
  siblingCount = 1,
  totalCount,
}: PaginationProps) => {
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const paginationItems = usePagination({
    currentPage,
    siblingCount,
    totalPageCount,
  })

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  return (
    <div className={'root'}>
      <div className={'paginationContainer'}>
        <button onClick={onPrevious}>prev</button>

        {paginationItems?.map(num => <button key={num}> {num} </button>)}

        <button onClick={onNext}>next</button>
      </div>

      <div className={'selectContainer'}>
        <Typography as={'span'} variant={'body2'}>
          Показать
        </Typography>
        <Select placeholder={'100'} />
        <Typography as={'span'} variant={'body2'}>
          на странице
        </Typography>
      </div>
    </div>
  )
}
