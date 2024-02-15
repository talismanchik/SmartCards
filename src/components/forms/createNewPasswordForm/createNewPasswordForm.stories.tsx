import type { Meta } from '@storybook/react'

import { CreateNewPasswordForm } from '@/components/forms/createNewPasswordForm/createNewPasswordForm'
import { Card } from '@/components/ui/card'

const meta = {
  argTypes: {},
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/CreateNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta

export const Primary = {
  render() {
    return (
      <Card
        style={{
          padding: '33px 36px 25px',
        }}
      >
        <CreateNewPasswordForm />
      </Card>
    )
  },
}
