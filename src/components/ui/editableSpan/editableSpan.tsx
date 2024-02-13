import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'

import { Input } from '@/components/ui/input'

import s from './editableSpan.module.scss'

type EditableSpanType = {
  disabled?: boolean
  inputClassName?: string
  isDone?: boolean
  maxValue: number
  minValue: number
  onChange: (title: string) => void
  spanClassName?: string
  title: string
}

export const EditableSpan = React.memo(
  ({
    disabled,
    inputClassName,
    isDone,
    maxValue,
    minValue,
    onChange,
    spanClassName,
    title,
  }: EditableSpanType) => {
    const [editMode, setEditMode] = useState(false)
    const [inputValue, setInputValue] = useState(title)

    useEffect(() => {
      setInputValue(title)
    }, [title])
    const activateEditeMode = () => {
      !disabled && setEditMode(true)
      setTimeout(() => {
        inputRef.current?.focus()
        inputRef.current?.select()
      }, 1)
    }
    const activateViewMode = () => {
      setEditMode(false)
      if (minValue > +inputValue || maxValue < +inputValue) {
        onChange(title)
      } else {
        onChange(inputValue)
      }
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        activateViewMode()
      }
    }
    const inputRef = useRef<HTMLInputElement | null>(null)

    return editMode ? (
      <Input
        autoFocus
        className={`${s.input} ${inputClassName}`}
        onBlur={activateViewMode}
        onChange={onChangeHandler}
        onClick={activateEditeMode}
        onKeyUp={onKeyPressHandler}
        ref={inputRef}
        type={'number'}
        value={inputValue}
        variant={'withoutDecoration'}
      />
    ) : (
      // <input value={inputValue} onBlur={activateViewMode} autoFocus onChange={onChangeHandler}/>
      <span
        className={`${isDone ? s.isDone : ''} ${spanClassName}`}
        onDoubleClick={activateEditeMode}
      >
        {title}
      </span>
    )
  }
)
