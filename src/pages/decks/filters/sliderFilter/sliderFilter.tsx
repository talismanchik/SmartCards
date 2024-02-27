import { useState } from 'react'

import { Slider } from '@/components/ui/slider'
import { GetMinMaxCards } from '@/services/decks/decks.types'

type Props = {
  minMaxCards: GetMinMaxCards
  onChangeCardsCount: (count: number[]) => void
}
export const SliderFilter = ({ minMaxCards, onChangeCardsCount }: Props) => {
  const [cardsCount, setCardsCount] = useState([1, minMaxCards.max])

  return (
    <Slider
      label={'Number of cards'}
      maxValue={minMaxCards?.max}
      onValueChange={onChangeCardsCount}
      values={cardsCount}
    />
  )
}
