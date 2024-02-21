import { Icon } from '@/components/ui/icon/Icon'
import { Column, Sort } from '@/components/ui/table/tableComponent'
import { TableCell, TableHead, TableRow } from '@/components/ui/table/tableConstructor'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from '../table.module.scss'

type Props = {
  onHandleSubmit: (key: string) => void
  sort?: Sort
  titles: Column[]
  withOptions: boolean
}
export const TableHeader = ({ onHandleSubmit, sort, titles, withOptions }: Props) => {
  const classNames = {
    rotateIcon: clsx(sort?.direction === 'desc' ? s.rotateIcon : ''),
    sortIconContainer: clsx(s.sortIconContainer),
    tableCell: clsx(s.tableCell),
    tableCellForOptions: clsx(s.tableCell, s.notActive),
    tableHead: clsx(s.tableHead),
    tableRow: clsx(s.tableRow),
  }
  const titleMarkup = titles.map(item => {
    return (
      <TableCell
        className={classNames.tableCell}
        key={item.key}
        onClick={() => onHandleSubmit(item.key)}
      >
        <Typography variant={'subtitle2'}>
          {item.title}
          {sort && sort.key === item.key ? (
            <span className={classNames.sortIconContainer}>
              <Icon
                className={classNames.rotateIcon}
                height={'12'}
                iconId={'arrow_up'}
                width={'12'}
              />
            </span>
          ) : (
            ''
          )}
        </Typography>
      </TableCell>
    )
  })

  return (
    <TableHead className={classNames.tableHead}>
      <TableRow className={classNames.tableRow}>
        {titleMarkup}
        {withOptions && (
          <TableCell className={classNames.tableCellForOptions}>
            <Typography variant={'subtitle2'}>Options</Typography>
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  )
}
