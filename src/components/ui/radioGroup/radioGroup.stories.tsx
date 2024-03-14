import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { InitialStateType, RadioGroup } from '@/components/ui/radioGroup/radioGroup'

const meta = {
  argTypes: {
    disabled: {
      defaultValue: false,
      options: [true, false],
      type: 'boolean',
    },
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
const initialState: InitialStateType = [
  { id: '1', title: 'Did not know', value: '1' },
  { id: '2', title: 'Forgot', value: '2' },
  { id: '3', title: 'A lot of thought', value: '3' },
  { id: '4', title: 'Confused', value: '4' },
  { id: '5', title: 'Knew the answer', value: '5' },
]

export const Base = {
  render() {
    const [value, setValue] = useState('Did not know')

    return (
      <RadioGroup disabled={false} onValueChange={setValue} value={value} values={initialState} />
    )
  },
}

export const Disabled = {
  args: {
    disabled: true,
    onValueChange: () => {},
    value: 'Did not know',
    values: initialState,
  },
}
