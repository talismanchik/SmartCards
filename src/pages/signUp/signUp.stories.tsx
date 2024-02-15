import type { Meta } from '@storybook/react'

import { SignUp } from '@/pages/signUp/signUp'

const meta = {
  argTypes: {},
  component: SignUp,
  tags: ['autodocs'],
  title: 'Pages/SignUp',
} satisfies Meta<typeof SignUp>

export default meta

export const Default = {
  render() {
    return <SignUp />
  },
}
