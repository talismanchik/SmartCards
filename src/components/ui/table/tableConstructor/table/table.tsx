import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

export const Table = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      table: clsx(className),
    }

    return <table className={classNames.table} ref={ref} {...rest}></table>
  }
)
