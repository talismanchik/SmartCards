import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: true,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

export const DefaultWithLabel: Story = {
  args: {
    checked: true,
    label: 'Check-box',
  },
}
