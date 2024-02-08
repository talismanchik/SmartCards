import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { Item, ItemText } from '@radix-ui/react-select'

import s from '@/components/ui/select/select.module.scss'

type SelectItemProps = {
  className?: string
} & ComponentPropsWithoutRef<typeof Item>

export const SelectItem = forwardRef<ElementRef<typeof Item>, SelectItemProps>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <Item {...restProps} ref={ref}>
        <ItemText>
          <Typography className={s.itemText} variant={'body1'}>
            {children}
          </Typography>
        </ItemText>
      </Item>
    )
  }
)
