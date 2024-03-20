import { useEffect, useState } from 'react'

import { ControlledCheckbox } from '@/components/controlled/controlledCheckbox'
import { ControlledInput } from '@/components/controlled/controlledInput'
import { Button } from '@/components/ui/button'
import { ImageContainer } from '@/components/ui/imageContainer'
import { Modal } from '@/components/ui/modal/Modal'
import { useDeckForm } from '@/features/deck/deckForm/useDeckForm'
import { EditValues } from '@/features/deck/updateDeck'
import { CreateDeckArgs } from '@/services/decks/decks.types'

import s from './deckForm.module.scss'

type DeckFormProps = {
  editValues?: EditValues
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  onSubmitForm: (data: FormData) => void
  title: string
}

export const DeckForm = ({
  editValues,
  isOpen,
  onOpenChange,
  onSubmitForm,
  title,
}: DeckFormProps) => {
  const { control, handleSubmit, reset, resetField } = useDeckForm(editValues)
  const [cover, setCover] = useState<File | null | string>(editValues?.cover ?? null)

  useEffect(() => {
    resetField('isPrivate', { defaultValue: editValues?.isPrivate })
    resetField('name', { defaultValue: editValues?.name })

    setCover(editValues?.cover ?? null)
  }, [editValues, resetField])

  const handleSaveFile = (file: File | undefined) => {
    setCover(file || null)
  }

  // const imageUrl = cover ? URL.createObjectURL(cover as File) : editValues?.cover

  const onSubmit = (data: CreateDeckArgs) => {
    onOpenChange(false)
    const formData = new FormData()

    if (!cover) {
      formData.append('cover', '')
    }

    if (cover instanceof File) {
      formData.append('cover', cover)
    }
    formData.append('name', data.name)
    formData.append('isPrivate', data.isPrivate + '')

    setCover(null)
    reset()

    onSubmitForm(formData)
  }

  const onClosedModal = (value: boolean) => {
    if (!value) {
      setCover(null)
      reset()
    }
    onOpenChange(value)
  }

  const deleteCoverHandler = () => {
    setCover(null)
  }

  const compileToImage = (file: File | null | undefined) => {
    if (!file) {
      return
    }
    if (file instanceof File) {
      return URL.createObjectURL(file as File)
    }

    return file
  }

  return (
    <Modal className={s.wrapper} onOpenChange={onClosedModal} open={isOpen} title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput className={s.input} control={control} label={'Name Deck'} name={'name'} />
        <ImageContainer
          deleteCoverHandler={deleteCoverHandler}
          handleSaveFile={handleSaveFile}
          imageUrl={compileToImage(cover as File)}
        />
        <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
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
