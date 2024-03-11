import { ChangeEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledInput } from '@/components/controlled/controlledInput'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { InputFile } from '@/components/ui/inputFile'
import { Modal } from '@/components/ui/modal/Modal'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './addNewCard.module.scss'

type AddNewCardFormProps = {
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  onSubmitForm: (data: FormData) => void
  title: string
}
export type AddNewCardFormValues = z.infer<typeof addNewCardFormSchema>

type AddNewCardArgs = {
  answer: string
  cover?: File | null | string
  question: string
}

const addNewCardFormSchema = z.object({
  answer: z.string(),
  question: z.string(),
})

export const CardForm = ({ isOpen, onOpenChange, onSubmitForm, title }: AddNewCardFormProps) => {
  const { control, handleSubmit, reset } = useForm<AddNewCardFormValues>({
    defaultValues: {
      answer: 'Name',
      question: 'Name',
    },
    resolver: zodResolver(addNewCardFormSchema),
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

  const imageUrl = cover ? URL.createObjectURL(cover as File) : null

  const onSubmit = (data: AddNewCardArgs) => {
    onOpenChange(false)
    const formData = new FormData()

    if (cover instanceof File) {
      formData.append('cover', cover)
    }
    formData.append('question', data.question)
    formData.append('answer', data.answer)

    setCover(null)
    reset()

    onSubmitForm(formData)
  }

  const onClose = () => {
    onOpenChange(false)
  }

  return (
    <Modal className={s.wrapper} onOpenChange={onOpenChange} open={isOpen} title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography className={s.title} variant={'h4'}>
          Question
        </Typography>
        <ControlledInput
          className={s.input}
          control={control}
          label={'Question?'}
          name={'question'}
        />
        <Button
          className={s.button}
          fullWidth
          onClick={openFileInput}
          type={'button'}
          variant={'secondary'}
        >
          <InputFile handleFileChange={handleFileChange} ref={fileInputRef} />
          <Icon iconId={'image_outline'} />
          <Typography variant={'subtitle2'}>Change Image</Typography>
        </Button>
        <br />
        <br />
        <Typography className={s.title} variant={'h4'}>
          Question
        </Typography>
        <ControlledInput className={s.input} control={control} label={'Answer?'} name={'answer'} />
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
          <Typography variant={'subtitle2'}>Change Image</Typography>
        </Button>
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
