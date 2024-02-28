import { ReactNode } from 'react'

import { Table, TableBody } from '@/components/ui/table/tableConstructor'
import { TableHeader } from '@/components/ui/table/tableHeader/tableHeader'
import clsx from 'clsx'

import s from './table.module.scss'

type Props = {
  children?: ReactNode
  onChangeSort: (key: string) => void
  sort: Sort
  titles: Column[]
  withOptions?: boolean
}
export const TableComponent = ({ children, onChangeSort, sort, titles, withOptions }: Props) => {
  const classNames = {
    iconContainer: clsx(s.iconContainer),
    table: clsx(s.table),
    tableBody: clsx(s.tableBody),
    tableDataCell: clsx(s.tableDataCell),
    tableRow: clsx(s.tableRow),
  }

  return (
    <Table className={classNames.table}>
      <TableHeader
        onHandleSubmit={onChangeSort}
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
