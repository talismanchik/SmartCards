import { useEffect, useState } from 'react'

import { ControlledInput } from '@/components/controlled/controlledInput'
import { Button } from '@/components/ui/button'
import { ImageContainer } from '@/components/ui/imageContainer'
import { Modal } from '@/components/ui/modal/Modal'
import { Typography } from '@/components/ui/typography'
import { useCardForm } from '@/features/card/cardForm/useCardForm'
import { EditValues } from '@/features/card/updateCard'

import s from './cardForm.module.scss'

type CardFormProps = {
  editValues?: EditValues
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  onSubmitForm: (data: FormData) => void
  title: string
}

type AddNewCardArgs = {
  answer: string
  cover?: File | null | string
  question: string
}

export const CardForm = ({
  editValues,
  isOpen,
  onOpenChange,
  onSubmitForm,
  title,
}: CardFormProps) => {
  const { control, handleSubmit, reset, resetField } = useCardForm(editValues)

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

  const deleteCoverQuestion = () => {
    setCoverQuestion(null)
  }
  const deleteCoverAnswer = () => {
    setCoverAnswer(null)
  }

  return (
    <Modal
      className={s.wrapper}
      onOpenChange={onClosedModal}
      open={isOpen}
      scrollClassName={s.scroll}
      title={title}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant={'h4'}>Question</Typography>
        <ControlledInput
          className={s.input}
          control={control}
          label={'Question'}
          name={'question'}
        />
        <ImageContainer
          deleteCoverHandler={deleteCoverQuestion}
          handleSaveFile={handleSaveFileQuestion}
          imageUrl={imageUrlQuestion}
        />
        <br />
        <br />
        <Typography variant={'h4'}>Answer</Typography>
        <ControlledInput className={s.input} control={control} label={'Answer'} name={'answer'} />
        <ImageContainer
          deleteCoverHandler={deleteCoverAnswer}
          handleSaveFile={handleSaveFileAnswer}
          imageUrl={imageUrlAnswer}
        />
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
