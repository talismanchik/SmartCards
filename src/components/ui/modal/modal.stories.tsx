import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal/Modal'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

export const Default = {
  render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open window</Button>
        <Modal
          buttons={[{ title: 'Add New Deck' }]}
          onOpenChange={setOpen}
          open={open}
          title={'Add New Deck'}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Input title={'Title'} />
            <Input title={'Key words'} />
          </div>
        </Modal>
      </>
    )
  },
}

export const TwoButton = {
  render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open window</Button>
        <Modal
          buttons={[{ title: 'Right Button' }, { title: 'Cancel', variant: 'secondary' }]}
          onOpenChange={setOpen}
          open={open}
          title={'Add New Deck'}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Input title={'Title'} />
            <Input title={'Key words'} />
          </div>
        </Modal>
      </>
    )
  },
}

export const FullWidthButton = {
  render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open window</Button>
        <Modal
          buttons={[{ fullWidth: true, title: 'Right Button' }]}
          onOpenChange={setOpen}
          open={open}
          title={'Add New Deck'}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Input title={'Title'} />
            <Input title={'Key words'} />
          </div>
        </Modal>
      </>
    )
  },
}
