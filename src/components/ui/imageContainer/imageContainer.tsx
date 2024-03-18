import { ChangeEvent, useRef } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { InputFile } from '@/components/ui/inputFile'
import { Typography } from '@/components/ui/typography'

import s from './imageContainer.module.scss'

type Props = {
  handleSaveFile: (file: File | undefined) => void
  imageUrl: File | null | string | undefined
}
export const ImageContainer = ({ handleSaveFile, imageUrl }: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSaveFile(e.target.files?.[0])
  }

  return (
    <>
      {imageUrl && <img alt={'cover'} className={s.coverImage} src={imageUrl as string} />}
      <Button
        className={s.button}
        fullWidth
        onClick={openFileInput}
        type={'button'}
        variant={'secondary'}
      >
        <InputFile handleFileChange={handleFileChange} ref={fileInputRef} />
        <Icon iconId={'image_outline'} />
        <Typography variant={'subtitle2'}>Upload Image</Typography>
      </Button>
    </>
  )
}
