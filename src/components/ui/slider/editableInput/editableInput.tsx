import { ChangeEvent, KeyboardEvent, RefObject, useEffect, useRef, useState } from 'react'

import { Input } from '@/components/ui/input'
type Props = {
  className?: string
  onChange: (title: string) => void
  value: string
}
export const EditableInput = ({ className, onChange, value }: Props) => {
  const [inputValue, setInputValue] = useState(value)
  const inputRef: RefObject<HTMLInputElement> = useRef(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const onBlurInput = () => {
    onChange(inputValue)
  }
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter' && inputRef.current) {
      inputRef.current.blur()
    }
  }

  return (
    <Input
      className={className}
      onBlur={onBlurInput}
      onChange={onChangeInput}
      onKeyDown={onKeyDownHandler}
      ref={inputRef}
      type={'number'}
      value={inputValue}
    />
  )
}
