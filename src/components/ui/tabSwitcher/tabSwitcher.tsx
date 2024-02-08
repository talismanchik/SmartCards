import { Typography } from '@/components/ui/typography'
import { List, Root, Trigger } from '@radix-ui/react-tabs'

import s from './tabSwitcher.module.scss'

type Props = {
  items: TabItem[]
  label?: string
  onValueChange: (value: string) => void
  value: string
}

export const TabSwitcher = ({ items, label, onValueChange, value }: Props) => {
  const itemMarkup = items.map((item, key) => {
    return (
      <Trigger className={s.TabsTrigger} disabled={item.disabled} key={key} value={item.value}>
        {item.title}
      </Trigger>
    )
  })

  return (
    <Typography as={'div'} variant={'body2'}>
      {label}
      <Root className={'TabsRoot'} defaultValue={'0'} onValueChange={onValueChange} value={value}>
        <List className={s.TabsList}>{itemMarkup}</List>
      </Root>
    </Typography>
  )
}

type TabItem = {
  disabled?: boolean
  title: string
  value: string
}
