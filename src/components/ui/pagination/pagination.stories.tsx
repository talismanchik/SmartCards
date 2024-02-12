import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '@/components/ui/pagination/pagination'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

export const Default = {
  render() {
    const [page, setPage] = useState(1)
    const [portionSize, setPortionSize] = useState('50')

    const optionsSelect = [
      { title: '50', value: '50' },
      { title: '20', value: '20' },
      { title: '10', value: '10' },
    ]

    return (
      <Pagination
        currentPage={page}
        onPageChange={pageNumber => setPage(pageNumber)}
        onValueChange={value => setPortionSize(value)}
        options={optionsSelect}
        pageSize={+portionSize}
        placeholder={portionSize}
        totalCount={200}
      />
    )
  },
}
