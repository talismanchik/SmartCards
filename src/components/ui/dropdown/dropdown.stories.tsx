import { useState } from 'react'

import defaultAvatar from '@/assets/user.png'
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

    return (
      <>
        <Dropdown
          onOpenChange={() => setOpen(!open)}
          open={open}
          trigger={<Icon iconId={'arrow_down'} />}
        >
          <DropdownItem children={['Изменить', 'Удалить']} />
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
          trigger={<img alt={'User avatar'} src={defaultAvatar}></img>}
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
