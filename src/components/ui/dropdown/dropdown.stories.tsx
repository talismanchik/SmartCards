import { useState } from 'react'

import { Dropdown, DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropdown/dropdown'
import { Icon } from '@/components/ui/icon/Icon'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Dropdown,
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

// @ts-ignore
export const WithoutIcon: Story = {
  render() {
    const [open, setOpen] = useState(false)
    const children = ['Изменить', 'Удалить']

    return (
      <>
        <Dropdown
          onOpenChange={() => setOpen(!open)}
          open={open}
          trigger={<Icon iconId={'arrow_down'} />}
        >
          <DropdownItem>
            {children.map((child, index) => (
              <span key={index}>{child}</span>
            ))}
          </DropdownItem>
        </Dropdown>
      </>
    )
  },
}
// @ts-ignore
export const WithIcon: Story = {
  render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Dropdown
          onOpenChange={() => setOpen(!open)}
          open={open}
          trigger={<Icon iconId={'arrow_down'} />}
        >
          <DropdownItemWithIcon
            items={[
              { icon: <Icon iconId={'edit'} />, text: 'Изменить' },
              { icon: <Icon iconId={'close'} />, text: 'Выйти' },
            ]}
          />
        </Dropdown>
      </>
    )
  },
}
