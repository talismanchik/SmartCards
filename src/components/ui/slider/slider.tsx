import { EditableInput } from '@/components/ui/slider/editableInput/editableInput'
import { Typography } from '@/components/ui/typography'
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type SliderComponentProps = {
  label?: string
  maxValue?: number
  minValue?: number
  onValueChange: (values: number[]) => void
  values: number[]
}

export const Slider = ({
  label,
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
    <Typography as={'div'} variant={'body2'}>
      {label}
      <div className={s.SliderComponent}>
        <EditableInput
          className={s.SliderValueInput}
          onChange={onChangeLeftValue}
          value={values[0] + ''}
        />
        <form className={s.form}>
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
        <EditableInput
          className={s.SliderValueInput}
          onChange={onChangeRightValue}
          value={values[1] + ''}
        />
      </div>
    </Typography>
  )
}
