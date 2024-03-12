import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      tableHead: clsx(className),
    }

    return <thead className={classNames.tableHead} ref={ref} {...rest}></thead>
  }
)
