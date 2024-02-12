import { useState } from 'react'

import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'

import s from './Slider.module.scss'

export type SliderComponentProps = {
  maxValue?: number
  minValue?: number
  startValues?: number[]
}

export const Slider = ({
  maxValue = 100,
  minValue = 0,
  startValues = [0, 100],
}: SliderComponentProps) => {
  const [sliderValues, setSliderValues] = useState(startValues)

  return (
    <div className={s.SliderComponent}>
      <span className={s.SliderValue}>{sliderValues[0]}</span>
      <form>
        <Root
          className={s.SliderRoot}
          defaultValue={startValues}
          max={maxValue}
          min={minValue}
          onValueChange={(value: number[]) => setSliderValues(value)}
        >
          <Track className={s.SliderTrack}>
            <Range className={s.SliderRange} />
          </Track>
          <Thumb aria-label={'Volume'} className={s.SliderThumb} />
          <Thumb aria-label={'Volume'} className={s.SliderThumb} />
        </Root>
      </form>
      <span className={s.SliderValue}>{sliderValues[1]}</span>
    </div>
  )
}
