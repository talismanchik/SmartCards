import { useState } from 'react'

import { Input } from '@/components/ui/input'
type Props = {
  changeFilters: (param: string) => void
  searchValue: string
}
export const InputFilter = ({ changeFilters, searchValue }: Props) => {
  const [search, setSearch] = useState(searchValue)
  const onChangeSearchInput = (value: string) => {
    setSearch(value)
    changeFilters(value)
  }
  const clearSearchField = () => {
    setSearch('')
    changeFilters('')
  }

  return (
    <Input
      clearField={clearSearchField}
      onValueChange={onChangeSearchInput}
      placeholder={'Input search'}
      value={search}
      variant={'searchDecoration'}
    />
  )
}
