import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import { Typography } from '@/components/ui/typography'
import { tabSwitcherItems } from '@/pages/decks/decks'
import { InputFilter } from '@/pages/decks/filters/inputFilter/inputFilter'
import { SliderFilter } from '@/pages/decks/filters/sliderFilter/sliderFilter'
import clsx from 'clsx'

import s from '@/pages/decks/decks.module.scss'

type Props = {
  changeFiltersParams: (params: string) => void
  clearFilter: () => void
  nameValue: string
}
export const Filters = ({ changeFiltersParams, clearFilter, nameValue }: Props) => {
  const changeFilters = (value: string) => {
    changeFiltersParams(value)
  }

  // @@@@@@@@@@@@@@@@@@@@@@@@@
  const [tab, setTab] = useState('allCards')
  const zaglushka = (value: string) => {
    setTab(value)
  }
  // @@@@@@@@@@@@@@@@@@@@@@@@@

  const styles = {
    filterButton: clsx(s.filterButton),
    filters: clsx(s.filtersWrapper),
  }

  return (
    <div className={styles.filters}>
      <InputFilter changeFilters={changeFilters} searchValue={nameValue} />
      <TabSwitcher
        items={tabSwitcherItems}
        label={'Show decks cards'}
        onValueChange={zaglushka}
        value={tab}
      />
      <SliderFilter />
      <Button className={styles.filterButton} onClick={clearFilter} variant={'secondary'}>
        <Icon iconId={'trash_outline'} />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
