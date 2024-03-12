import type { Meta } from '@storybook/react'

import { ForgotPasswordForm } from '@/components/forms/forgotPasswordForm/forgotPasswordForm'
import { ForgotPasswordFormValues } from '@/components/forms/forgotPasswordForm/useForgotPasswordForm'
import { Card } from '@/components/ui/card'

const meta = {
  argTypes: {},
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta

export const Primary = {
  render() {
    const onsubmitHandler = (data: ForgotPasswordFormValues) => {
      console.log(data)
    }

    return (
      <Card
        style={{
          padding: '33px 36px 25px',
        }}
      >
        <ForgotPasswordForm onSubmitForm={onsubmitHandler} />
      </Card>
    )
  },
}
