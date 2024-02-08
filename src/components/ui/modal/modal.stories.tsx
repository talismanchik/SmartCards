import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '@/components/ui/modal/Modal'
import { Typography } from '@/components/ui/typography'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    buttons: [{ title: 'Right Button' }],
    children: (
      <Typography variant={'body1'}>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniamdsa
      </Typography>
    ),
    title: 'Title',
  },
}

export const TwoButton: Story = {
  args: {
    buttons: [{ title: 'Right Button' }, { title: 'Left Button', variant: 'secondary' }],
    children: <form></form>,
    title: 'Title',
  },
}

export const FullWidthButton: Story = {
  args: {
    buttons: [{ fullWidth: true, title: 'Right Button' }],
    children: <div></div>,
    title: 'Title',
  },
}
