import type { Meta } from '@storybook/react'

import { useEffect, useState } from 'react'

import { EditableSpan } from '@/components/ui/editableSpan/editableSpan'

const meta = {
  component: EditableSpan,
  tags: ['autodocs'],
  title: 'Components/EditableSpan',
} satisfies Meta<typeof EditableSpan>

export default meta

export const Default = {
  render() {
    const [value, setValue] = useState('EditableSpan')

    useEffect(() => {
      setValue(value)
    }, [value])

    return (
      <>
        <EditableSpan onChange={setValue} title={value} />
      </>
    )
  },
}
