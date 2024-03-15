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

import s from './cardForm.module.scss'

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
  const fileInputRefQuestion = useRef<HTMLInputElement | null>(null)
  const fileInputRefAnswer = useRef<HTMLInputElement | null>(null)
  const [coverQuestion, setCoverQuestion] = useState<File | null | string>(null)
  const [coverAnswer, setCoverAnswer] = useState<File | null | string>(null)

  const handleFileChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]

    setCoverQuestion(selectedFile || null)
  }

  const openFileInputQuestion = () => {
    if (fileInputRefQuestion.current) {
      fileInputRefQuestion.current.click()
    }
  }
  const handleFileChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]

    setCoverAnswer(selectedFile || null)
  }

  const openFileInputAnswer = () => {
    if (fileInputRefAnswer.current) {
      fileInputRefAnswer.current.click()
    }
  }

  const imageUrlQuestion = coverQuestion ? URL.createObjectURL(coverQuestion as File) : null
  const imageUrlAnswer = coverAnswer ? URL.createObjectURL(coverAnswer as File) : null

  const onSubmit = (data: AddNewCardArgs) => {
    onOpenChange(false)
    const formData = new FormData()

    if (coverQuestion instanceof File) {
      formData.append('questionImg', coverQuestion)
    }
    if (coverAnswer instanceof File) {
      formData.append('answerImg', coverAnswer)
    }
    formData.append('question', data.question)
    formData.append('answer', data.answer)

    setCoverQuestion(null)
    setCoverAnswer(null)

    reset()

    onSubmitForm(formData)
  }

  const onClose = () => {
    onOpenChange(false)
  }

  return (
    <Modal
      className={s.wrapper}
      onOpenChange={onOpenChange}
      open={isOpen}
      scrollClassName={s.scroll}
      title={title}
    >
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography className={s.title} variant={'h4'}>
          Question
        </Typography>
        <ControlledInput
          className={s.input}
          control={control}
          label={'Question?'}
          name={'question'}
        />
        {imageUrlQuestion && (
          <img alt={'cover'} className={s.coverImage} src={imageUrlQuestion as string} />
        )}
        <Button
          className={s.button}
          fullWidth
          onClick={openFileInputQuestion}
          type={'button'}
          variant={'secondary'}
        >
          <InputFile handleFileChange={handleFileChangeQuestion} ref={fileInputRefQuestion} />
          <Icon iconId={'image_outline'} />
          <Typography variant={'subtitle2'}>Change Image</Typography>
        </Button>
        <br />
        <br />
        <Typography className={s.title} variant={'h4'}>
          Question
        </Typography>
        <ControlledInput className={s.input} control={control} label={'Answer?'} name={'answer'} />
        {imageUrlAnswer && (
          <img alt={'cover'} className={s.coverImage} src={imageUrlAnswer as string} />
        )}
        <Button
          className={s.button}
          fullWidth
          onClick={openFileInputAnswer}
          type={'button'}
          variant={'secondary'}
        >
          <InputFile handleFileChange={handleFileChangeAnswer} ref={fileInputRefAnswer} />
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
