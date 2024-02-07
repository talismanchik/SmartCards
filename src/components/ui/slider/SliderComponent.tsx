import { useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './Slider.module.scss'

export type SliderComponentProps = {
  maxValue?: number
  minValue?: number
  startValues?: number[]
}

export const SliderComponent = ({
  maxValue = 100,
  minValue = 0,
  startValues = [0, 100],
}: SliderComponentProps) => {
  const [sliderValues, setSliderValues] = useState(startValues)

  return (
    <div className={s.SliderComponent}>
      <span className={s.SliderValue}>{sliderValues[0]}</span>
      <form>
        <Slider.Root
          className={s.SliderRoot}
          defaultValue={startValues}
          max={maxValue}
          min={minValue}
          onValueChange={(value: number[]) => setSliderValues(value)}
        >
          <Slider.Track className={s.SliderTrack}>
            <Slider.Range className={s.SliderRange} />
          </Slider.Track>
          <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} />
          <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} />
        </Slider.Root>
      </form>
      <span className={s.SliderValue}>{sliderValues[1]}</span>
    </div>
  )
}
