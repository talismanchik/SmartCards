import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Checkbox',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Checkbox',
    disabled: false,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Checkbox',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
