import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import { Typography } from '@/components/ui/typography'
import { tabSwitcherItems } from '@/pages/decks/decks'
import { useDecksFilter } from '@/pages/decks/hooks/useDecksFilter'
import { useGetMeQuery } from '@/services/auth/auth.service'
import clsx from 'clsx'

import s from '@/pages/decks/decks.module.scss'

export const Filters = () => {
  const {
    authorId,
    change,
    changeFiltersParam,
    clearFilter,
    deckName,
    maxCardsCount,
    minCardsCount,
    minMaxCards,
  } = useDecksFilter()
  const { data: meData } = useGetMeQuery()

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
  }

  const [tab, setTab] = useState(authorId ? 'myCards' : 'allCards')
  const onChangeTabSwitcher = (value: string) => {
    setTab(value)
    meData && changeFiltersParam('authorId', value === 'myCards' ? meData.id : null)
  }

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
        onValueChange={onChangeTabSwitcher}
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
