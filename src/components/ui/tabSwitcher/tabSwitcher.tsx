import { Item, Root } from '@radix-ui/react-toggle-group'

import s from './tabSwitcher.module.scss'

type Props = {
  disabled: boolean
  items: string[]
}

export const TabSwitcher = ({ disabled, items }: Props) => {
  const itemMarkup = items.map((item, key) => {
    return (
      <Item
        aria-label={'' + key}
        className={`${s.ToggleGroupItem}`}
        disabled={disabled}
        key={key}
        value={'' + key}
      >
        {item}
      </Item>
    )
  })

  return (
    <Root
      aria-label={'Text alignment'}
      className={s.ToggleGroup}
      defaultValue={'0'}
      disabled={disabled}
      type={'single'}
    >
      {itemMarkup}
    </Root>
  )
}
