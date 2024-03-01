import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlledCheckbox'
import { ControlledInput } from '@/components/controlled/controlledInput'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Modal } from '@/components/ui/modal/Modal'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './addNewDeck.module.scss'

type AddNewDeckProps = {
  isOpen: boolean
  onOpenChange: (value: boolean) => void
}
export type AddNewDeckFormValues = z.infer<typeof addNewDeckSchema>

const addNewDeckSchema = z.object({
  isPrivate: z.boolean().optional().default(false),
  name: z.string(),
})

export const AddNewDeck = ({ isOpen, onOpenChange }: AddNewDeckProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<AddNewDeckFormValues>({
    resolver: zodResolver(addNewDeckSchema),
  })
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [cover, setCover] = useState<File | null | string>(null)

  console.log(errors)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]

    setCover(selectedFile || null)
    console.log(selectedFile)
  }

  const imageUrl = cover ? URL.createObjectURL(cover as File) : undefined
  const onSubmit = (data: AddNewDeckFormValues) => {
    onOpenChange(false)
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('isPrivate', data.isPrivate.toString())
    cover && formData.append('cover', cover || '')
    setCover(null)
    reset()

    formData.forEach((value, key) => {
      console.log(key, value)
    })
  }

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <Modal className={s.wrapper} onOpenChange={onOpenChange} open={isOpen} title={'Add New Deck'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput className={s.input} control={control} label={'Name Deck'} name={'name'} />
        {cover && <img alt={'cover'} className={s.coverImage} src={imageUrl} />}
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
        <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
        <div className={s.buttonWrapper}>
          <Button onClick={() => onOpenChange(false)} type={'button'} variant={'secondary'}>
            Cancel
          </Button>
          <Button type={'submit'}>Add New Deck</Button>
        </div>
      </form>
    </Modal>
  )
}

type InputFileProps = {
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
} & ComponentPropsWithoutRef<'input'>

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  ({ handleFileChange }, ref) => {
    return <input onChange={handleFileChange} ref={ref} style={{ display: 'none' }} type={'file'} />
  }
)
