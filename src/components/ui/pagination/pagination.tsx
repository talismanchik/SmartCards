import { Icon } from '@/components/ui/icon/Icon'
import { usePagination } from '@/components/ui/pagination/usePagination'
import { Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import { SelectProps } from '@radix-ui/react-select'

import s from './pagination.module.scss'

type PaginationProps = {
  currentPage: number
  onPageChange: (pageNumber: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
} & SelectProps

export const Pagination = ({
  currentPage,
  onPageChange,
  pageSize,
  siblingCount = 1,
  totalCount,
  ...restProps
}: PaginationProps) => {
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const paginationItems = usePagination({
    currentPage,
    siblingCount,
    totalPageCount,
  })

  const onPrevPage = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1)
    }
  }

  const onNextPage = () => {
    if (currentPage !== totalPageCount) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className={s.root}>
      <div className={s.paginationContainer}>
        <button className={s.iconWrapper} onClick={onPrevPage} tabIndex={0}>
          <Icon iconId={'arrow_back'} />
        </button>

        {paginationItems?.map((num, index) => {
          if (num === '...') {
            return (
              // <button key={index} tabIndex={-1}>
              //   {num}
              // </button>
              <Typography as={'span'} key={index} tabIndex={-1} variant={'body2'}>
                {num}
              </Typography>
            )
          } else {
            return (
              <button
                className={s.button}
                key={index}
                onClick={() => onPageChange(+num)}
                tabIndex={0}
              >
                <Typography as={'span'} variant={'body2'}>
                  {num}
                </Typography>
              </button>
            )
          }
        })}

        <button className={s.iconWrapper} onClick={onNextPage} tabIndex={0}>
          <Icon iconId={'arrow_forward'} />
        </button>
      </div>

      <div className={s.selectContainer}>
        <Typography as={'span'} variant={'body2'}>
          Показать
        </Typography>
        <Select placeholder={'100'} {...restProps} />
        <Typography as={'span'} variant={'body2'}>
          на странице
        </Typography>
      </div>
    </div>
  )
}
