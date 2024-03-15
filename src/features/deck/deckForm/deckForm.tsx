import { ChangeEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlledCheckbox'
import { ControlledInput } from '@/components/controlled/controlledInput'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { InputFile } from '@/components/ui/inputFile'
import { Modal } from '@/components/ui/modal/Modal'
import { Typography } from '@/components/ui/typography'
import { EditValues } from '@/features/deck/updateDeck'
import { CreateDeckArgs } from '@/services/decks/decks.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './deckForm.module.scss'

type AddNewDeckFormProps = {
  editValues?: EditValues
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  onSubmitForm: (data: FormData) => void
  title: string
}
export type AddNewDeckFormValues = z.infer<typeof addNewDeckFormSchema>

const addNewDeckFormSchema = z.object({
  isPrivate: z.boolean().optional().default(false),
  name: z.string(),
})

export const DeckForm = ({
  editValues,
  isOpen,
  onOpenChange,
  onSubmitForm,
  title,
}: AddNewDeckFormProps) => {
  const {
    control,
    // formState: { errors },
    handleSubmit,
    reset,
  } = useForm<AddNewDeckFormValues>({
    defaultValues: {
      isPrivate: editValues?.isPrivate || false,
      name: editValues?.name || '',
    },
    resolver: zodResolver(addNewDeckFormSchema),
  })
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [cover, setCover] = useState<File | null | string>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]

    setCover(selectedFile || null)
  }

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const imageUrl = cover ? URL.createObjectURL(cover as File) : editValues?.cover

  const onSubmit = (data: CreateDeckArgs) => {
    onOpenChange(false)
    const formData = new FormData()

    if (cover instanceof File) {
      formData.append('cover', cover)
    }
    formData.append('name', data.name)
    formData.append('isPrivate', data.isPrivate + '')

    setCover(null)
    reset()

    onSubmitForm(formData)
  }

  const onClose = () => {
    onOpenChange(false)
    setCover('')
    reset()
  }

  // console.log(errors)

  return (
    <Modal className={s.wrapper} onOpenChange={onOpenChange} open={isOpen} title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput className={s.input} control={control} label={'Name Deck'} name={'name'} />
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
        <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
        <div className={s.buttonWrapper}>
          <Button onClick={onClose} type={'button'} variant={'secondary'}>
            Cancel
          </Button>
          <Button type={'submit'}>{title}</Button>
        </div>
      </form>
    </Modal>
  )
}
