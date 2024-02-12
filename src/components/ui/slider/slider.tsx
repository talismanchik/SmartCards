import { EditableSpan } from '@/components/ui/editableSpan'
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type SliderComponentProps = {
  maxValue?: number
  minValue?: number
  onValueChange: (values: number[]) => void
  values: number[]
}

export const Slider = ({
  maxValue = 100,
  minValue = 0,
  onValueChange,
  values = [0, 100],
}: SliderComponentProps) => {
  const onChangeLeftValue = (e: string) => {
    const arr = values.slice()

    arr[0] = +e
    arr.sort((a, b) => a - b)
    onValueChange(arr)
  }
  const onChangeRightValue = (e: string) => {
    const arr = values.slice()

    arr[1] = +e
    arr.sort((a, b) => a - b)
    onValueChange(arr)
  }

  return (
    <div className={s.SliderComponent}>
      <EditableSpan
        inputClassName={s.SliderValueInput}
        maxValue={maxValue}
        minValue={minValue}
        onChange={onChangeLeftValue}
        spanClassName={s.SliderValue}
        title={'' + values[0]}
      />
      <form>
        <Root
          className={s.SliderRoot}
          max={maxValue}
          min={minValue}
          onValueChange={(value: number[]) => onValueChange(value)}
          value={values}
        >
          <Track className={s.SliderTrack}>
            <Range className={s.SliderRange} />
          </Track>
          <Thumb aria-label={'Volume'} className={s.SliderThumb} />
          <Thumb aria-label={'Volume'} className={s.SliderThumb} />
        </Root>
      </form>
      <EditableSpan
        inputClassName={s.SliderValueInput}
        maxValue={maxValue}
        minValue={minValue}
        onChange={onChangeRightValue}
        spanClassName={s.SliderValue}
        title={'' + values[1]}
      />
    </div>
  )
}
