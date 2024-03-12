import { ComponentPropsWithoutRef } from 'react'

import { Icon } from '@/components/ui/icon/Icon'
import { usePagination } from '@/components/ui/pagination/usePagination'
import { Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './pagination.module.scss'

type PaginationProps = {
  currentPage: number
  onPageChange: (pageNumber: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
} & ComponentPropsWithoutRef<typeof Select>

export const Pagination = ({
  className,
  currentPage,
  onPageChange,
  pageSize,
  siblingCount = 1,
  totalCount,
  ...restProps
}: PaginationProps) => {
  const classNames = {
    iconWrapper: clsx(s.iconWrapper),
    item(currentItem: number) {
      return clsx(s.button, currentItem === currentPage && s.activeItem)
    },
    paginationContainer: clsx(s.root, className),
  }
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const paginationItems = usePagination({
    currentPage,
    siblingCount,
    totalPageCount,
  })

  const onPageSizeChange = (newPageSize: number) => {
    Math.ceil(totalCount / newPageSize)
    pageSize !== newPageSize && onPageChange(1)
    pageSize !== newPageSize &&
      restProps.onValueChange &&
      restProps.onValueChange(newPageSize.toString())
  }

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
    <div className={classNames.paginationContainer}>
      <div className={s.paginationContainer}>
        <button
          className={classNames.iconWrapper}
          disabled={currentPage === 1}
          onClick={onPrevPage}
          tabIndex={0}
        >
          <Icon iconId={'arrow_back'} />
        </button>

        {paginationItems?.map((num, index) => {
          if (num === '...') {
            return (
              <Typography
                as={'span'}
                className={s.dots}
                key={index}
                tabIndex={-1}
                variant={'body2'}
              >
                {num}
              </Typography>
            )
          } else {
            return (
              <button
                className={classNames.item(+num)}
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

        <button
          className={s.iconWrapper}
          disabled={currentPage === totalPageCount}
          onClick={onNextPage}
          tabIndex={0}
        >
          <Icon iconId={'arrow_forward'} />
        </button>
      </div>

      <div className={s.selectContainer}>
        <Typography as={'span'} variant={'body2'}>
          Показать
        </Typography>
        <Select
          className={s.select}
          placeholder={restProps.placeholder}
          {...restProps}
          onValueChange={newValue => onPageSizeChange(+newValue)}
          options={restProps.options}
          value={restProps.value}
        />
        <Typography as={'span'} variant={'body2'}>
          на странице
        </Typography>
      </div>
    </div>
  )
}
