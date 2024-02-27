import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import { Typography } from '@/components/ui/typography'
import { tabSwitcherItems } from '@/pages/decks/decks'
import clsx from 'clsx'

import s from '@/pages/decks/decks.module.scss'

type Props = {
  changeFiltersParam: (field: string, value: null | string) => void
  clearFilter: () => void
  maxCardsCount: number
  minMaxCards: number[]
  nameValue: string
}

export const Filters = ({
  changeFiltersParam,
  clearFilter,
  maxCardsCount,
  minMaxCards,
  nameValue,
}: Props) => {
  const [search, setSearch] = useState(nameValue)
  const [cardsCount, setCardsCount] = useState(
    minMaxCards[1] == 0 ? [0, maxCardsCount] : minMaxCards
  )

  const onChangeSearchInput = (value: string) => {
    setSearch(value)
    changeFiltersParam('name', value)
  }
  const clearSearchField = () => {
    setSearch('')
    changeFiltersParam('name', null)
  }
  const clearFiltersHandler = () => {
    clearFilter()
    setSearch('')
    setCardsCount([0, maxCardsCount])
  }

  const onChangeNumberOfCards = (numberOfCards: number[]) => {
    setCardsCount(numberOfCards)
    if (numberOfCards[0] !== cardsCount[0]) {
      changeFiltersParam('minCardsCount', numberOfCards[0] + '')
    }
    if (numberOfCards[1] !== cardsCount[1]) {
      changeFiltersParam('maxCardsCount', numberOfCards[1] + '')
    }
  }

  // ........................................
  const [tab, setTab] = useState('allCards')
  const zaglushka = (value: string) => {
    setTab(value)
  }
  // ..........................................

  const styles = {
    filterButton: clsx(s.filterButton),
    filters: clsx(s.filtersWrapper),
  }

  return (
    <div className={styles.filters}>
      <Input
        clearField={clearSearchField}
        onValueChange={onChangeSearchInput}
        placeholder={'Input search'}
        value={search}
        variant={'searchDecoration'}
      />
      <TabSwitcher
        items={tabSwitcherItems}
        label={'Show decks cards'}
        onValueChange={zaglushka}
        value={tab}
      />
      <Slider
        label={'Number of cards'}
        maxValue={maxCardsCount}
        onValueChange={onChangeNumberOfCards}
        values={cardsCount}
      />
      <Button className={styles.filterButton} onClick={clearFiltersHandler} variant={'secondary'}>
        <Icon iconId={'trash_outline'} />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
