import { ReactNode, useState } from 'react'

import { Table, TableBody } from '@/components/ui/table/tableConstructor'
import { TableHeader } from '@/components/ui/table/tableHeader/tableHeader'
import clsx from 'clsx'

import s from './table.module.scss'

type Props = {
  children?: ReactNode
  titles: Column[]
  withOptions: boolean
}
export const TableComponent = ({ children, titles, withOptions }: Props) => {
  const classNames = {
    iconContainer: clsx(s.iconContainer),
    table: clsx(s.table),
    tableBody: clsx(s.tableBody),
    tableDataCell: clsx(s.tableDataCell),
    tableRow: clsx(s.tableRow),
  }

  const [sort, setSort] = useState<Sort>(null)

  const handleSubmit = (key: string) => {
    if (sort && sort.key === key) {
      // setSort({ direction: sort.direction === 'asc' ? 'desc' : 'asc', key })
      setSort(sort.direction === 'asc' ? { direction: 'desc', key } : null)
    } else {
      setSort({
        direction: 'asc',
        key,
      })
    }
  }

  return (
    <Table className={classNames.table}>
      <TableHeader
        onHandleSubmit={handleSubmit}
        sort={sort}
        titles={titles}
        withOptions={withOptions}
      />
      <TableBody className={classNames.tableBody}>{children}</TableBody>
    </Table>
  )
}

export type Column = {
  key: string
  title: string
}
export type Deck = {
  cardsCount: number
  createdBy: string
  title: string
  updated: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
