import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

export const TableCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      th: clsx(className),
    }

    return <th className={classNames.th} ref={ref} {...rest}></th>
  }
)
