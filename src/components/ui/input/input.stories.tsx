import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

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

export const EyeDecoration: Story = {
  render() {
    const [value, setValue] = useState('')
    const [disabled, setDisabled] = useState(false)

    return (
      <>
        <Input
          clearField={() => setValue('')}
          disabled={disabled}
          label={'label'}
          onChange={e => setValue(e.currentTarget.value)}
          value={value}
          variant={'eyeDecoration'}
        />
        <Button onClick={() => setDisabled(!disabled)} style={{ margin: '30px' }}>
          disabled
        </Button>
      </>
    )
  },
}

export const SearchDecoration: Story = {
  render() {
    const [value, setValue] = useState('')
    const [disabled, setDisabled] = useState(false)

    return (
      <>
        <Input
          clearField={() => setValue('')}
          disabled={disabled}
          label={'label'}
          onChange={e => setValue(e.currentTarget.value)}
          value={value}
          variant={'searchDecoration'}
        />
        <Button onClick={() => setDisabled(!disabled)} style={{ margin: '30px' }}>
          disabled
        </Button>
      </>
    )
  },
}

export const WithoutDecoration: Story = {
  render() {
    const [value, setValue] = useState('')
    const [disabled, setDisabled] = useState(false)

    return (
      <>
        <Input
          clearField={() => setValue('')}
          disabled={disabled}
          label={'label'}
          onChange={e => setValue(e.currentTarget.value)}
          value={value}
          variant={'withoutDecoration'}
        />
        <Button onClick={() => setDisabled(!disabled)} style={{ margin: '30px' }}>
          disabled
        </Button>
      </>
    )
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
