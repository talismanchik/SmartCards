import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '@/components/ui/pagination/pagination'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentPage: 1,
    pageSize: 10,
    totalCount: 1000,
  },
}
