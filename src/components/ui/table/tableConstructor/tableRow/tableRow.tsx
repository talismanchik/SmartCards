import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from '../../table.module.scss'

export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      tr: clsx(s.tableRow, className),
    }

    return <tr className={classNames.tr} ref={ref} {...rest}></tr>
  }
)
