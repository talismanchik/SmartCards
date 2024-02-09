import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { InitialStateType, RadioGroup } from '@/components/ui/radioGroup/RadioGroup'

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
  { id: '1', value: 'Did not know' },
  { id: '2', value: 'Forgot' },
  { id: '3', value: 'A lot of thought' },
  { id: '4', value: 'Confused' },
  { id: '5', value: 'Knew the answer' },
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
