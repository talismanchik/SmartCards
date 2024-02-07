import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  argTypes: {
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
    error: {
      type: 'string',
    },
    variant: {
      options: ['eyeDecoration', 'searchDecoration', 'withoutDecoration'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    placeholder: 'Input',
  },
}
//
// export const EyeDecoration: Story = {
//   args: {
//     disabled: false,
//     placeholder: 'EyeDecoration Input',
//     variant: 'eyeDecoration',
//   },
// }
// export const SearchDecoration: Story = {
//   args: {
//     disabled: false,
//     placeholder: 'SearchDecoration Input',
//     variant: 'searchDecoration',
//   },
// }
// export const Error: Story = {
//   args: {
//     disabled: false,
//     error: 'Error!',
//     placeholder: 'Error Input',
//     variant: 'withoutDecoration',
//   },
// }
