import type { Meta } from '@storybook/react'

import { Header } from '@/components/header/header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta

export const AuthFalse = {
  render() {
    return <Header isAuth={false} />
  },
}

export const AuthTrue = {
  render() {
    return <Header isAuth />
  },
}
