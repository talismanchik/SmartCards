import type { Meta } from '@storybook/react'

import { LoginForm } from '@/components/auth/login-form/login-form'
import { Card } from '@/components/ui/card'

const meta = {
  argTypes: {},
  component: LoginForm,
  tags: ['autodocs'],
  title: 'Auth/LoginForm',
} satisfies Meta<typeof LoginForm>

export default meta

export const Primary = {
  render() {
    return (
      <Card
        style={{
          padding: '33px 36px 25px',
        }}
      >
        <LoginForm />
      </Card>
    )
  },
}
