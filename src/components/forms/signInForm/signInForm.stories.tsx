import type { Meta } from '@storybook/react'

import { SignInForm } from '@/components/forms/signInForm/signInForm'
import { SignInFormValues } from '@/components/forms/signInForm/useSignInForm'
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
    const onSubmitForm = (data: SignInFormValues) => {
      console.log(data)
    }

    return (
      <Card
        style={{
          padding: '33px 36px 25px',
        }}
      >
        <SignInForm onSubmitForm={onSubmitForm} />
      </Card>
    )
  },
}
