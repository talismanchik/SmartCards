import { List, Root, Trigger } from '@radix-ui/react-tabs'

import s from './tabSwitcher.module.scss'

type Props = {
  disabled: boolean
  items: string[]
}

export const TabSwitcher = ({ disabled, items }: Props) => {
  const itemMarkup = items.map((item, key) => {
    return (
      <Trigger className={s.TabsTrigger} disabled={disabled} key={key} value={'' + key}>
        {item}
      </Trigger>
    )
  })

  return (
    <Root className={'TabsRoot'} defaultValue={'0'}>
      <List className={s.TabsList}>{itemMarkup}</List>
    </Root>
  )
}

//по рэдиксу есть компонент который отображается в зависимости от выбраной кнопки
//<Content className={'TabsContent'} value={'0'}></Content>
