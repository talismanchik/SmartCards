import type { Meta } from '@storybook/react'

import { SignUpForm } from '@/components/forms/signUp/signUpForm'
import { Card } from '@/components/ui/card'

const meta = {
  argTypes: {},
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/SignUpForm',
} satisfies Meta<typeof SignUpForm>

export default meta

export const Default = {
  render() {
    return (
      <Card
        style={{
          padding: '27px 36px 20px',
        }}
      >
        <SignUpForm />
      </Card>
    )
  },
}
