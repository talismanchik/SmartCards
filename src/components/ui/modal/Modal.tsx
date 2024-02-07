import { Button } from '@/components/ui/button'
import { ModalFooter } from '@/components/ui/modal/modalComponent/footer/ModalFooter'
import { ModalHeader } from '@/components/ui/modal/modalComponent/header/ModalHeader'
import { Content, Overlay, Portal, Root, Trigger } from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './Modal.module.scss'
export const Modal = () => {
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
          <ModalHeader />
          <ModalFooter />
        </Content>
      </Portal>
    </Root>
  )
}

/* <Description className={'DialogDescription'}>
            Make changes to your profile here. Click save when you're done.
          </Description>
          <fieldset className={'Fieldset'}>
            <label className={'Label'} htmlFor={'name'}>
              Name
            </label>
            <input className={'Input'} defaultValue={'Pedro Duarte'} id={'name'} />
          </fieldset>
          <fieldset className={'Fieldset'}>
            <label className={'Label'} htmlFor={'username'}>
              Username
            </label>
            <input className={'Input'} defaultValue={'@peduarte'} id={'username'} />
          </fieldset>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 25 }}>

          </div>*/
