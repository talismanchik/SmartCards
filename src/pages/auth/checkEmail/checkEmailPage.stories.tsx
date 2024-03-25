import type { Meta } from '@storybook/react'

import { CheckEmailPage } from '@/pages/auth/checkEmail/checkEmailPage'

const meta = {
  argTypes: {},
  component: CheckEmailPage,
  tags: ['autodocs'],
  title: 'Pages/CheckEmailPage',
} satisfies Meta<typeof CheckEmailPage>

export default meta

export const Default = {
  render() {
    return <CheckEmailPage />
  },
}
