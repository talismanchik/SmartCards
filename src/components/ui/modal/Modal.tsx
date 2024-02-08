import { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ContentContainer } from '@/components/ui/modal/modalComponent/content/ContentContainer'
import { ModalButton, ModalFooter } from '@/components/ui/modal/modalComponent/footer/ModalFooter'
import { ModalHeader } from '@/components/ui/modal/modalComponent/header/ModalHeader'
import { Content, Overlay, Portal, Root, Trigger } from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './Modal.module.scss'

type Props = {
  buttons: ModalButton[]
  children: ReactNode
  title: string
}
export const Modal = ({ buttons, children, title }: Props) => {
  const classNames = {
    content: clsx(s.content),
  }

  return (
    <Root>
      <Trigger asChild>
        <Button>Edit profile</Button>
      </Trigger>
      <Portal>
        <Overlay className={'DialogOverlay'} />
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
