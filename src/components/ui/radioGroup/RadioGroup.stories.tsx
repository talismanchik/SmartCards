import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroupComponent } from '@/components/ui/radioGroup/RadioGroupComponent'

const meta = {
  argTypes: {
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
  },
  component: RadioGroupComponent,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroupComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {},
}
