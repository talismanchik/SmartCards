import type { Meta } from '@storybook/react'

import { GradeStar } from '@/components/ui/gradeStar/gradeStar'

const meta = {
  component: GradeStar,
  tags: ['autodocs'],
  title: 'Components/GradeStar',
} satisfies Meta<typeof GradeStar>

export default meta

export const Default = {
  render() {
    return <GradeStar grade={3} />
  },
}
