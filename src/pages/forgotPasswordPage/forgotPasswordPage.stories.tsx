import type { Meta } from '@storybook/react'

import { ForgotPasswordPage } from '@/pages/forgotPasswordPage/forgotPasswordPage'

const meta = {
  argTypes: {},
  component: ForgotPasswordPage,
  tags: ['autodocs'],
  title: 'Pages/ForgotPasswordPage',
} satisfies Meta<typeof ForgotPasswordPage>

export default meta

export const Default = {
  render() {
    return <ForgotPasswordPage />
  },
}
