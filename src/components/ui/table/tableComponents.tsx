import { useState } from 'react'

import { Icon } from '@/components/ui/icon/Icon'
import { Table, TableBody, TableDataCell, TableRow } from '@/components/ui/table/tableConstructor'
import { TableHeader } from '@/components/ui/table/tableHeader/tableHeader'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './table.module.scss'

type Props = {
  data: Deck[]
  titles: Column[]
  withOptions: boolean
}
export const TableComponents = ({ data, titles, withOptions }: Props) => {
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
  const dataMarkup = data.map((item, index) => {
    return (
      <TableRow className={classNames.tableRow} key={index}>
        <TableDataCell className={classNames.tableDataCell}>
          <Typography variant={'body2'}>{item.title}</Typography>
        </TableDataCell>
        <TableDataCell className={classNames.tableDataCell}>
          <Typography variant={'body2'}>{item.cardsCount}</Typography>
        </TableDataCell>
        <TableDataCell className={classNames.tableDataCell}>
          <Typography variant={'body2'}>{item.updated}</Typography>
        </TableDataCell>
        <TableDataCell className={classNames.tableDataCell}>
          <Typography variant={'body2'}>{item.createdBy}</Typography>
        </TableDataCell>
        <TableDataCell className={classNames.tableDataCell}>
          <div className={classNames.iconContainer}>
            <Icon iconId={'play_circle_outline'} />
          </div>
        </TableDataCell>
      </TableRow>
    )
  })

  return (
    <Table className={classNames.table}>
      <TableHeader
        onHandleSubmit={handleSubmit}
        sort={sort}
        titles={titles}
        withOptions={withOptions}
      />
      <TableBody className={classNames.tableBody}>{dataMarkup}</TableBody>
    </Table>
  )
}

export type Column = {
  key: string
  title: string
}
type Deck = {
  cardsCount: number
  createdBy: string
  title: string
  updated: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
