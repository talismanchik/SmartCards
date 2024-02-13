import type { Meta } from '@storybook/react'

import { SignInForm } from '@/components/forms/signIn/signInForm'
import { Card } from '@/components/ui/card'

const meta = {
  argTypes: {},
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/SignInForm',
} satisfies Meta<typeof SignInForm>

export default meta

export const Primary = {
  render() {
    return (
      <Card
        style={{
          padding: '33px 36px 25px',
        }}
      >
        <SignInForm />
      </Card>
    )
  },
}
