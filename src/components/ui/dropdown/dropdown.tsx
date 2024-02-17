import { CSSProperties, ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { AnimatePresence, MotionProps, Variants, motion } from 'framer-motion'

import s from './toolbar.module.scss'

export type DropdownProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  className?: string
  onOpenChange: (open: boolean) => void
  open: boolean
  style?: CSSProperties
  trigger?: ReactNode
}
const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      delayChildren: 0.2,
      duration: 0.4,
      staggerChildren: 0.05,
      type: 'spring',
    },
  },
} satisfies Variants

const item = {
  transition: { opacity: { duration: 0.2 } },
  variants: {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0 },
  },
} satisfies MotionProps

export const Dropdown = ({
  align = 'end',
  children,
  className,
  onOpenChange,
  open,
  style,
  trigger,
}: DropdownProps) => {
  const classNames = {
    arrow: s.arrow,
    arrowBox: s.arrowBox,
    button: s.button,
    content: clsx(s.content, className),
    itemsBox: s.itemsBox,
  }

  return (
    <DropdownMenuRadix.Root onOpenChange={onOpenChange} open={open}>
      <DropdownMenuRadix.Trigger asChild>{trigger}</DropdownMenuRadix.Trigger>
      <AnimatePresence>
        {open && (
          <DropdownMenuRadix.Portal forceMount>
            <DropdownMenuRadix.Content
              align={align}
              asChild
              className={classNames.content}
              forceMount
              onClick={event => event.stopPropagation()}
              sideOffset={8}
              style={style}
            >
              <motion.div
                animate={open ? 'open' : 'closed'}
                exit={'closed'}
                initial={'closed'}
                variants={menu}
              >
                <DropdownMenuRadix.Arrow asChild className={classNames.arrowBox}>
                  <div className={classNames.arrow} />
                </DropdownMenuRadix.Arrow>
                <div className={classNames.itemsBox}>{children}</div>
              </motion.div>
            </DropdownMenuRadix.Content>
          </DropdownMenuRadix.Portal>
        )}
      </AnimatePresence>
    </DropdownMenuRadix.Root>
  )
}

export type DropdownItemProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  onSelect?: (event: Event) => void
  style?: CSSProperties
}

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  className,
  disabled,
  onSelect,
  style,
}) => {
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <DropdownMenuRadix.Item
      asChild
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      style={style}
    >
      <motion.div {...item}>{children}</motion.div>
    </DropdownMenuRadix.Item>
  )
}

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropdownItemWithIcon: FC<DropdownItemWithIconProps> = ({
  className,
  disabled,
  icon,
  onSelect,
  style,
  text,
  ...rest
}) => {
  const classNames = {
    item: clsx(s.item, className),
    itemIcon: s.itemIcon,
  }

  return (
    <DropdownMenuRadix.Item
      asChild
      className={classNames.item}
      disabled={disabled}
      onClick={event => event.stopPropagation()}
      onSelect={onSelect}
      style={style}
      {...rest}
    >
      <motion.div {...item}>
        <div className={classNames.itemIcon}>{icon}</div>
        <Typography variant={'caption'}>{text}</Typography>
      </motion.div>
    </DropdownMenuRadix.Item>
  )
}
