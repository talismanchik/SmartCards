import { KeyboardEvent, RefObject, useEffect, useRef, useState } from 'react'

import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type SliderComponentProps = {
  defaultValues: number[]
  label?: string
  maxValue?: number
  minValue?: number
  onChangeLeftCardsCount?: (value: number) => void
  onChangeRightCardsCount?: (value: number) => void
  onValueCommit: (values: number[]) => void
}

export const Slider = ({
  defaultValues = [0, 100],
  label,
  maxValue = 100,
  minValue = 0,
  onValueCommit,
}: SliderComponentProps) => {
  const [values, setValues] = useState(defaultValues)
  const [leftInput, setLeftInput] = useState(defaultValues[0])
  const leftInputRef: RefObject<HTMLInputElement> = useRef(null)
  const [rightInput, setRightInput] = useState(defaultValues[1])

  useEffect(() => {
    setValues(defaultValues)
    setLeftInput(defaultValues[0])
    setRightInput(defaultValues[1])
  }, [defaultValues])

  const rightInputRef: RefObject<HTMLInputElement> = useRef(null)

  const onValueCommitHandler = (value: number, side: 'left' | 'right') => {
    //debugger
    const correctValue = Math.min(value, maxValue ?? values[1])
    const arr = side === 'left' ? [correctValue, rightInput] : [leftInput, correctValue]

    arr.sort((a, b) => a - b)

    setValues(arr)
    setLeftInput(arr[0])
    setRightInput(arr[1])
    //arr[1] !== defaultValues[1] && onChangeRightCardsCount(arr[1])
    //arr[0] !== defaultValues[0] && onChangeLeftCardsCount(arr[0])
    onValueCommit(arr)
  }

  const onChangeSliderValues = (value: number[]) => {
    setLeftInput(value[0])
    setRightInput(value[1])
    setValues(value)
  }

  const onKeyDownHandler = (
    e: KeyboardEvent<HTMLInputElement>,
    inputRef: RefObject<HTMLInputElement>
  ) => {
    if (e.key === 'Enter' && inputRef.current) {
      inputRef.current.blur()
    }
  }

  return (
    <Typography as={'div'} variant={'body2'}>
      {label}
      <div className={s.SliderComponent}>
        <Input
          className={s.SliderValueInput}
          onBlur={e => onValueCommitHandler(+e.currentTarget.value, 'left')}
          onChange={e => setLeftInput(+e.currentTarget.value)}
          onKeyDown={e => onKeyDownHandler(e, leftInputRef)}
          ref={leftInputRef}
          type={'number'}
          value={leftInput}
        />
        <form className={s.form}>
          <Root
            className={s.SliderRoot}
            max={maxValue}
            min={minValue}
            onValueChange={onChangeSliderValues}
            onValueCommit={onValueCommit}
            value={values}
          >
            <Track className={s.SliderTrack}>
              <Range className={s.SliderRange} />
            </Track>
            <Thumb aria-label={'Volume'} className={s.SliderThumb} />
            <Thumb aria-label={'Volume'} className={s.SliderThumb} />
          </Root>
        </form>
        <Input
          className={s.SliderValueInput}
          onBlur={e => onValueCommitHandler(+e.currentTarget.value, 'right')}
          onChange={e => setRightInput(+e.currentTarget.value)}
          onKeyDown={e => onKeyDownHandler(e, rightInputRef)}
          ref={rightInputRef}
          type={'number'}
          value={rightInput}
        />
      </div>
    </Typography>
  )
}
