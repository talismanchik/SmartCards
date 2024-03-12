import type { Meta } from '@storybook/react'

import { Icon } from '@/components/ui/icon/Icon'
import { TableComponent } from '@/components/ui/table/tableComponent'
import { TableDataCell, TableRow } from '@/components/ui/table/tableConstructor'
import { Typography } from '@/components/ui/typography'

import s from './table.module.scss'

const meta = {
  component: TableComponent,
  tags: ['autodocs'],
  title: 'Components/TableComponent',
} satisfies Meta<typeof TableComponent>

export default meta

export const TableStory = {
  render() {
    const dataMarkup = dataForDecks.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableDataCell>
            <Typography variant={'body2'}>{item.title}</Typography>
          </TableDataCell>
          <TableDataCell>
            <Typography variant={'body2'}>{item.cardsCount}</Typography>
          </TableDataCell>
          <TableDataCell>
            <Typography variant={'body2'}>{item.updated}</Typography>
          </TableDataCell>
          <TableDataCell>
            <Typography variant={'body2'}>{item.createdBy}</Typography>
          </TableDataCell>
          <TableDataCell>
            <div className={s.iconContainer}>
              <Icon iconId={'play_circle_outline'} />
            </div>
          </TableDataCell>
        </TableRow>
      )
    })

    return (
      <TableComponent onChangeSort={() => {}} sort={null} titles={titlesForDecks} withOptions>
        {dataMarkup}
      </TableComponent>
    )
  },
}

const titlesForDecks = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'createdBy',
    title: 'Created by',
  },
]

const dataForDecks = [
  {
    cardsCount: 10,
    createdBy: 'John Doe',
    title: 'Project A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 5,
    createdBy: 'Jane Smith',
    title: 'Project B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Alice Johnson',
    title: 'Project C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 3,
    createdBy: 'Bob Anderson',
    title: 'Project D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 12,
    createdBy: 'Emma Davis',
    title: 'Project E',
    updated: '2023-07-04',
  },
]
