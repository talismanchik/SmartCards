import type { Meta, StoryObj } from '@storybook/react'

import { SelectDemo } from '@/components/ui/select/select'

const meta = {
  component: SelectDemo,
  tags: ['autodocs'],
  title: 'Components/SelectDemo',
} satisfies Meta<typeof SelectDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: true,
    options: [
      { title: 'value-1', value: '1' },
      { title: 'value-2', value: '2' },
      { title: 'value-3', value: '3' },
    ],
    placeholder: 'Select-boxчччччччччччччччччччччччччччч',
  },
}

export const DefaultWithLabel: Story = {
  args: {
    disabled: false,
    label: 'Select-box',
    options: [
      { title: 'value-1', value: '1' },
      { title: 'value-2', value: '2' },
      { title: 'value-3', value: '3' },
    ],
    placeholder: 'Select-box',
  },
}
