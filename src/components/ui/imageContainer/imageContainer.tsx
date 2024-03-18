import { ChangeEvent, useRef } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { InputFile } from '@/components/ui/inputFile'
import { Typography } from '@/components/ui/typography'

import s from './imageContainer.module.scss'

type Props = {
  deleteCoverHandler: () => void
  handleSaveFile: (file: File | undefined) => void
  imageUrl: File | null | string | undefined
}
export const ImageContainer = ({ deleteCoverHandler, handleSaveFile, imageUrl }: Props) => {
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
      {imageUrl && (
        <div className={s.imageWrapper}>
          <img alt={'cover'} className={s.coverImage} src={imageUrl as string} />
          <div className={s.icon} onClick={() => deleteCoverHandler()}>
            <Icon iconId={'trash_outline'} />
          </div>
        </div>
      )}
      <Button
        className={s.button}
        fullWidth
        onClick={openFileInput}
        type={'button'}
        variant={'secondary'}
      >
        <InputFile handleFileChange={handleFileChange} ref={fileInputRef} />
        <Icon iconId={'image_outline'} />
        <Typography variant={'subtitle2'}>{imageUrl ? 'Change Image' : 'Upload Image'}</Typography>
      </Button>
    </>
  )
}
