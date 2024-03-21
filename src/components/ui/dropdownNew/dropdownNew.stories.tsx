import avatar from '@/assets/user.png'
import { CustomSeparator, DropdownNew } from '@/components/ui/dropdownNew'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import { Item } from '@radix-ui/react-dropdown-menu'
import { Meta } from '@storybook/react'

const meta = {
  component: DropdownNew,
  title: 'Components/DropdownNew',
} satisfies Meta<typeof DropdownNew>

export default meta

export const DropDownForProfile = {
  render() {
    return (
      <DropdownNew
        children={
          <>
            <Item>
              <Icon iconId={'person_outline'} />
              <Typography>My Profile</Typography>
            </Item>
            <CustomSeparator />
            <Item>
              <Icon iconId={'log_out'} />
              <Typography>Logout</Typography>
            </Item>
          </>
        }
        label={
          <div
            style={{ alignItems: 'center', display: 'flex', gap: '8px', justifyContent: 'center' }}
          >
            <img
              alt={'user avatar'}
              src={avatar}
              style={{ borderRadius: '50%', maxWidth: '36px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Ivan</span>
              <span>ivan@email.com</span>
            </div>
          </div>
        }
        trigger={
          <img alt={'user avatar'} src={avatar} style={{ borderRadius: '50%', maxWidth: '36px' }} />
        }
      />
    )
  },
}

export const DropDownForEditDeck = {
  render() {
    return (
      <DropdownNew
        children={
          <>
            <Item>
              <Icon iconId={'play_circle_outline'} />
              <Typography>Learn</Typography>
            </Item>
            <CustomSeparator />
            <Item>
              <Icon iconId={'edit_outline'} />
              <Typography>Edit</Typography>
            </Item>
            <CustomSeparator />
            <Item>
              <Icon iconId={'trash_outline'} />
              <Typography>Delete</Typography>
            </Item>
          </>
        }
        trigger={<Icon height={'24'} iconId={'more_vertical'} width={'24'} />}
      />
    )
  },
}
