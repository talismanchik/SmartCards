import { TableHeader } from '@/components/ui/table/tableHeader/tableHeader'

import s from './table.module.scss'

export const Table = () => {
  return (
    <table className={s.table}>
      <TableHeader />
      <tbody>
        <tr>
          <td>first deck</td>
          <td>10</td>
          <td>03.02.2024</td>
          <td>talismanchik_by</td>
          <td>play</td>
        </tr>
        <tr>
          <td>second deck</td>
          <td>9</td>
          <td>03.02.2024</td>
          <td>talismanchik_by</td>
          <td>play</td>
        </tr>
        <tr>
          <td>third deck</td>
          <td>11</td>
          <td>03.02.2024</td>
          <td>talismanchik_by</td>
          <td>play</td>
        </tr>
      </tbody>
    </table>
  )
}
