import { Button } from '@/components/ui/button'
import { Close } from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './ModalFooter.module.scss'

export type ModalButton = {
  fullWidth?: boolean
  title: string
  variant?: 'primary' | 'secondary'
}
type Props = {
  buttons: ModalButton[]
}
export const ModalFooter = ({ buttons }: Props) => {
  const classNames = {
    root: clsx(s.root),
  }

  const buttonMarkup = buttons.map((button, index) => {
    return (
      <Button fullWidth={button.fullWidth} key={index} variant={button.variant}>
        {button.title}
      </Button>
    )
  })

  return (
    <Close asChild>
      <div className={classNames.root}>{buttonMarkup}</div>
    </Close>
  )
}
