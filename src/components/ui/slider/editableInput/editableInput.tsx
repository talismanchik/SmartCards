import {
  ChangeEvent,
  ComponentProps,
  KeyboardEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'

import { Input } from '@/components/ui/input'

type Props = {
  className?: string
  onValueChange: (title: string) => void
  value: string
} & ComponentProps<'input'>
export const EditableInput = ({ className, onValueChange, value }: Props) => {
  const [inputValue, setInputValue] = useState(value)
  const inputRef: RefObject<HTMLInputElement> = useRef(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const onBlurInput = () => {
    onValueChange(inputValue)
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
