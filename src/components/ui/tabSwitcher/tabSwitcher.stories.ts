import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from '@/components/ui/tabSwitcher/tabSwitcher'

const meta = {
  argTypes: {},
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSwitcher: Story = {
  args: {
    disabled: false,
    items: ['Switcher', 'Switcher', 'Switcher', 'Switcher'],
  },
}

export const DisabledSwitcher: Story = {
  args: {
    disabled: true,
    items: ['Switcher', 'Switcher', 'Switcher', 'Switcher'],
  },
}
