import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from '../../table.module.scss'

export const TableDataCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      td: clsx(s.tableDataCell, className),
    }

    return <td className={classNames.td} ref={ref} {...rest}></td>
  }
)
