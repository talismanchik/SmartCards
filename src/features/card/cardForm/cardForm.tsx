import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledInput } from '@/components/controlled/controlledInput'
import { Button } from '@/components/ui/button'
import { ImageContainer } from '@/components/ui/imageContainer'
import { Modal } from '@/components/ui/modal/Modal'
import { Typography } from '@/components/ui/typography'
import { EditValues } from '@/features/card/updateCard'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './cardForm.module.scss'

type AddNewCardFormProps = {
  editValues?: EditValues
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

export const CardForm = ({
  editValues,
  isOpen,
  onOpenChange,
  onSubmitForm,
  title,
}: AddNewCardFormProps) => {
  const { control, handleSubmit, reset, resetField } = useForm<AddNewCardFormValues>({
    defaultValues: {
      answer: editValues?.answer ?? '',
      question: editValues?.question ?? '',
    },
    resolver: zodResolver(addNewCardFormSchema),
  })

  useEffect(() => {
    resetField('question', { defaultValue: editValues?.question })
    resetField('answer', { defaultValue: editValues?.answer })
  }, [editValues, resetField])

  const [coverQuestion, setCoverQuestion] = useState<File | null | string>(null)
  const [coverAnswer, setCoverAnswer] = useState<File | null | string>(null)

  const handleSaveFileQuestion = (file: File | undefined) => {
    setCoverQuestion(file || null)
  }

  const handleSaveFileAnswer = (file: File | undefined) => {
    setCoverAnswer(file || null)
  }

  const imageUrlQuestion = coverQuestion
    ? URL.createObjectURL(coverQuestion as File)
    : editValues?.coverQuestion

  const imageUrlAnswer = coverAnswer
    ? URL.createObjectURL(coverAnswer as File)
    : editValues?.coverAnswer

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

  const onClosedModal = (value: boolean) => {
    if (!value) {
      setCoverQuestion(null)
      setCoverAnswer(null)
      reset()
    }
    onOpenChange(value)
  }

  return (
    <Modal
      className={s.wrapper}
      onOpenChange={onClosedModal}
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
          label={'Question'}
          name={'question'}
        />
        <ImageContainer handleSaveFile={handleSaveFileQuestion} imageUrl={imageUrlQuestion} />
        <br />
        <br />
        <Typography className={s.title} variant={'h4'}>
          Answer
        </Typography>
        <ControlledInput className={s.input} control={control} label={'Answer'} name={'answer'} />
        <ImageContainer handleSaveFile={handleSaveFileAnswer} imageUrl={imageUrlAnswer} />
        <div className={s.buttonWrapper}>
          <Button onClick={() => onClosedModal(false)} type={'button'} variant={'secondary'}>
            Cancel
          </Button>
          <Button type={'submit'}>{title}</Button>
        </div>
      </form>
    </Modal>
  )
}
