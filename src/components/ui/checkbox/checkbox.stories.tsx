import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

export const Default = {
  render() {
    const [check, setCheck] = useState(false)

    return <Checkbox checked={check} onCheckedChange={checked => setCheck(checked)} />
  },
}

export const DefaultWithLabel = {
  render() {
    const [check, setCheck] = useState(false)

    return (
      <Checkbox
        checked={check}
        label={'Check-box'}
        onCheckedChange={checked => setCheck(checked)}
      />
    )
  },
}

export const Disabled = {
  args: {
    checked: true,
    disabled: true,
  },
}
