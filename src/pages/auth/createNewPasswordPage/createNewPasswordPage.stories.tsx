import type { Meta } from '@storybook/react'

import { CreateNewPasswordPage } from '@/pages/auth/createNewPasswordPage/createNewPasswordPage'

const meta = {
  argTypes: {},
  component: CreateNewPasswordPage,
  tags: ['autodocs'],
  title: 'Pages/CreateNewPasswordPage',
} satisfies Meta<typeof CreateNewPasswordPage>

export default meta

export const Default = {
  render() {
    return <CreateNewPasswordPage />
  },
}
