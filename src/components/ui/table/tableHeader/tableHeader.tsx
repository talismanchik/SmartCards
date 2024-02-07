import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from '../table.module.scss'

type Props = {
  titles: string[]
}
export const TableHeader = ({ titles }: Props) => {
  const classNames = {
    th: clsx(s.tr),
    thead: clsx(s.thead),
  }
  const titleMarkup = titles.map((title, index) => {
    return (
      <th className={classNames.th} key={index}>
        <Typography variant={'subtitle2'}>{title}</Typography>
      </th>
    )
  })

  return (
    <thead className={classNames.thead}>
      <tr>{titleMarkup}</tr>
    </thead>
  )
}
