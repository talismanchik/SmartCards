import type { Meta } from '@storybook/react'

import { SignIn } from '@/pages/sign-in/signIn'

const meta = {
  argTypes: {},
  component: SignIn,
  tags: ['autodocs'],
  title: 'Pages/SignIn',
} satisfies Meta<typeof SignIn>

export default meta

export const Default = {
  render() {
    return <SignIn />
  },
}
