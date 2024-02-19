import type { Meta } from '@storybook/react'

import { SignUpForm } from '@/components/forms/signUpForm/signUpForm'
import { SignUpFormValues } from '@/components/forms/signUpForm/useSignUpForm'
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
    const onSubmitForm = (data: SignUpFormValues) => {
      debugger
      console.log(data)
    }

    return (
      <Card
        style={{
          padding: '27px 36px 20px',
        }}
      >
        <SignUpForm onSubmitForm={onSubmitForm} />
      </Card>
    )
  },
}
