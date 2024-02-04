import s from '../table.module.scss'

export const TableHeader = () => {
  return (
    <thead className={s.thead}>
      <tr>
        <th>Name</th>
        <th>Cards</th>
        <th>Last Update</th>
        <th>Created by</th>
        <th></th>
      </tr>
    </thead>
  )
}
