import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '@/components/ui/modal/Modal'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
