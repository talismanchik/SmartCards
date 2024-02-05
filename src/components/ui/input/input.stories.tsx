import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['withoutDecoration', 'eyeDecoration', 'searchDecoration'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const WithoutDecoration: Story = {
  args: {
    disabled: false,

    placeholder: 'WithoutDecoration Input',
    variant: 'withoutDecoration',
  },
}

export const EyeDecoration: Story = {
  args: {
    disabled: false,
    placeholder: 'EyeDecoration Input',
    variant: 'eyeDecoration',
  },
}
export const SearchDecoration: Story = {
  args: {
    disabled: false,
    placeholder: 'SearchDecoration Input',
    variant: 'searchDecoration',
  },
}
export const Error: Story = {
  args: {
    disabled: false,
    error: true,
    placeholder: 'Error Input',
    variant: 'withoutDecoration',
  },
}
