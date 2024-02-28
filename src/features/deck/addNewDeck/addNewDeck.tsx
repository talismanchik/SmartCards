import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Icon } from '@/components/ui/icon/Icon'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal/Modal'
import { ModalButton } from '@/components/ui/modal/modalComponent/footer/ModalFooter'
import { Typography } from '@/components/ui/typography'

import s from './addNewDeck.module.scss'
type AddNewDeckProps = {
  isOpen: boolean
  onOpenChange: () => void
}
export const AddNewDeck = ({ isOpen, onOpenChange }: AddNewDeckProps) => {
  const buttons: ModalButton[] = [
    {
      title: 'Add New Pack',
    },
    {
      title: 'Cancel',
      variant: 'secondary',
    },
  ]

  return (
    <Modal
      buttons={buttons}
      className={s.wrapper}
      onOpenChange={onOpenChange}
      open={isOpen}
      title={'Add New Deck'}
    >
      <Input className={s.input} label={'Name Deck'} />
      <Button className={s.button} fullWidth variant={'secondary'}>
        <Icon iconId={'image_outline'} />
        <Typography variant={'subtitle2'}>Upload Image</Typography>
      </Button>
      <Checkbox label={'Private deck'} />
    </Modal>
  )
}
