import { Typography } from '@/components/ui/typography'
import { List, Root, Trigger } from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tabSwitcher.module.scss'

type Props = {
  className?: string
  items: TabItem[]
  label?: string
  onValueChange: (value: string) => void
  value: string
}

export const TabSwitcher = ({ className, items, label, onValueChange, value }: Props) => {
  const classNames = {
    container: clsx(className),
    list: clsx(s.TabsList),
    trigger: clsx(s.TabsTrigger),
  }
  const itemMarkup = items.map((item, key) => {
    return (
      <Trigger className={classNames.trigger} disabled={item.disabled} key={key} value={item.value}>
        {item.title}
      </Trigger>
    )
  })

  return (
    <Typography as={'div'} className={classNames.container} variant={'body2'}>
      {label}
      <Root defaultValue={'0'} onValueChange={onValueChange} value={value}>
        <List className={classNames.list}>{itemMarkup}</List>
      </Root>
    </Typography>
  )
}

export type TabItem = {
  disabled?: boolean
  title: string
  value: string
}
