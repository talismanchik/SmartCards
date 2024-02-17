import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      tbody: clsx(className),
    }

    return <tbody className={classNames.tbody} ref={ref} {...rest}></tbody>
  }
)
