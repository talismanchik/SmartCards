import { ChangeEvent, ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './inputFile.module.scss'

type InputFileProps = {
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
} & ComponentPropsWithoutRef<'input'>

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  ({ handleFileChange }, ref) => {
    return <input className={s.file} onChange={handleFileChange} ref={ref} type={'file'} />
  }
)
