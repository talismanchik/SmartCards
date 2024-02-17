import { useState } from 'react'

import { Dropdown, DropdownItem } from '@/components/ui/dropdown/dropdown'
import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button/button'

const meta = {
  component: Dropdown,
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

// @ts-ignore
export const Default: Story = {
  render() {
    const [open, setOpen] = useState(true)

    return (
      <>
        <Button>open</Button>
        <Dropdown onOpenChange={setOpen} open={open}>
          <DropdownItem>{'bpvtybnm'}</DropdownItem>
          <DropdownItem>{'bpvtybnm'}</DropdownItem>
          <DropdownItem>{'bpvtybnm'}</DropdownItem>
          <DropdownItem>{'bpvtybnm'}</DropdownItem>
          <DropdownItem>{'bpvtybnm'}</DropdownItem>
          <DropdownItem>{'bpvtybnm'}</DropdownItem>
        </Dropdown>
      </>
    )
  },
}
