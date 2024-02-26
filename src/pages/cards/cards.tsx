// import s from './cardsService.ts.module.scss'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useOrderByString } from '@/components/hooks/useOrderByString'
import { Icon } from '@/components/ui/icon/Icon'
import { Column, Sort, TableComponent } from '@/components/ui/table/tableComponent'
import { TableDataCell, TableRow } from '@/components/ui/table/tableConstructor'
import { Typography } from '@/components/ui/typography'
import { DecksByIDItems, useGetDecksByIDQuery } from '@/services/cards/cardsService'

export const Cards = () => {
  const [orderBy, setOrderBy] = useState<Sort>(null)

  const orderByString = useOrderByString(orderBy)

  const { data } = useGetDecksByIDQuery({
    id: 'cls3s7drs035wrr2ufg2v1ik1',
    orderBy: orderByString,
  })

  console.log(data)

  const dataMap = data?.items.map((item: DecksByIDItems) => {
    return (
      <TableRow key={item.id}>
        <TableDataCell>
          <Typography variant={'body2'}>{item.question}</Typography>
        </TableDataCell>
        <TableDataCell>
          <Typography variant={'body2'}>{item.answer}</Typography>
        </TableDataCell>
        <TableDataCell>
          <Typography variant={'body2'}>
            {new Date(item.updated).toLocaleDateString('ru-RU')}
          </Typography>
        </TableDataCell>
        <TableDataCell>
          <Typography variant={'body2'}>{item.grade}</Typography>
        </TableDataCell>
        {/*<TableDataCell>*/}
        {/*  <div className={s.iconContainer} onClick={() => deleteDeck({ id: item.id })}>*/}
        {/*    <Icon iconId={'play_circle_outline'} />*/}
        {/*  </div>*/}
        {/*</TableDataCell>*/}
      </TableRow>
    )
  })

  return (
    <div>
      <Link to={''}>
        <Icon iconId={'arrow_back_outline'} />
        Return to Previous Page
      </Link>

      <TableComponent setSort={setOrderBy} sort={orderBy} titles={columns}>
        {dataMap}
      </TableComponent>
    </div>
  )
}

const columns: Column[] = [
  {
    key: 'question',
    title: 'Question',
  },
  {
    key: 'answer',
    title: 'Answer',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'grade',
    title: 'Grade',
  },
]
