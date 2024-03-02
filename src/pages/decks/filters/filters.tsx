import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import { Typography } from '@/components/ui/typography'
import { tabSwitcherItems } from '@/pages/decks/decks'
import { useDecksFilter } from '@/pages/decks/hooks/useDecksFilter'
import clsx from 'clsx'

import s from '@/pages/decks/decks.module.scss'

export const Filters = () => {
  const {
    change,
    changeFiltersParam,
    clearFilter,
    deckName,
    maxCardsCount,
    minCardsCount,
    minMaxCards,
  } = useDecksFilter()

  const onChangeSearchInput = (value: string) => {
    changeFiltersParam('name', value)
  }
  const clearSearchField = () => {
    changeFiltersParam('name', null)
  }
  const clearFiltersHandler = () => {
    clearFilter()
  }

  const onChangeNumberOfCards = (numberOfCards: number[]) => {
    change(numberOfCards)
    /* if (numberOfCards[0] !== +minCardsCount) {
      changeFiltersParam('minCardsCount', numberOfCards[0] + '')
    }
    if (numberOfCards[1] !== +maxCardsCount) {
      changeFiltersParam('maxCardsCount', numberOfCards[1] + '')
    }*/
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
        value={deckName}
        variant={'searchDecoration'}
      />
      <TabSwitcher
        items={tabSwitcherItems}
        label={'Show decks cards'}
        onValueChange={zaglushka}
        value={tab}
      />
      <Slider
        defaultValues={[+minCardsCount, +maxCardsCount]}
        label={'Number of cards'}
        maxValue={minMaxCards?.max}
        onValueCommit={onChangeNumberOfCards}
      />
      <Button className={styles.filterButton} onClick={clearFiltersHandler} variant={'secondary'}>
        <Icon iconId={'trash_outline'} />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
