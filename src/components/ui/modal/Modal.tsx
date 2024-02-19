import { ReactNode } from 'react'

import { Card } from '@/components/ui/card'
import { ContentContainer } from '@/components/ui/modal/modalComponent/content/ContentContainer'
import { ModalButton, ModalFooter } from '@/components/ui/modal/modalComponent/footer/ModalFooter'
import { ModalHeader } from '@/components/ui/modal/modalComponent/header/ModalHeader'
import { Content, Portal, Root } from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './Modal.module.scss'

type Props = {
  buttons: ModalButton[]
  children: ReactNode
  className?: string
  onOpenChange: (value: boolean) => void
  open: boolean
  title: string
}
export const Modal = ({ buttons, children, className, onOpenChange, open, title }: Props) => {
  const classNames = {
    content: clsx(s.content, className),
  }

  return (
    <Root onOpenChange={onOpenChange} open={open}>
      <Portal>
        <Content className={classNames.content}>
          <Card>
            <ModalHeader title={title} />
            <ContentContainer>{children}</ContentContainer>
            <ModalFooter buttons={buttons} />
          </Card>
        </Content>
      </Portal>
    </Root>
  )
}
