import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { TabSwitcher } from '@/components/ui/tabSwitcher/tabSwitcher'

const meta = {
  argTypes: {},
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta

const tabs = [
  { title: 'My cards', value: 'myCards' },
  { title: 'All cards', value: 'allCards' },
]

export const DefaultSwitcher = {
  render: () => {
    const [value, setValue] = useState('allCards')

    return <TabSwitcher items={tabs} onValueChange={value => setValue(value)} value={value} />
  },
}
