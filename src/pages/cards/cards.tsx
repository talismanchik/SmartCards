import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { TableComponent } from '@/components/ui/table/tableComponent'
import { Typography } from '@/components/ui/typography'
import { columns } from '@/pages/cards/cardsData/columnsData'
import { useCardFilter } from '@/pages/cards/hooks/useCardFilter'
import { TableCards } from '@/pages/cards/tableBody/tableCards'

import s from './cards.module.scss'

import defaultImage from '../../assets/default.png'

// type CardsProps = {
//   id: string
//   isOwner: boolean
//   title: string
// }
export const Cards = () => {
  const isOwner = true

  const {
    currentPage,
    data,
    inputSearch,
    onChangeCurrentPage,
    onChangeInputValue,
    onChangePortionSize,
    onChangeSort,
    orderBy,
  } = useCardFilter()

  console.log(data)

  return (
    <div className={s.wrapper}>
      <Link className={s.previousPage} to={''}>
        <Icon iconId={'arrow_back_outline'} />
        <Typography variant={'body2'}>Back to Previous Page</Typography>
      </Link>
      <div className={s.titleButtonWrapper}>
        <Typography className={s.title} variant={'h1'}>
          Название deck
        </Typography>
        {isOwner ? <Button>Add New Card</Button> : <Button>Learn Cards</Button>}
      </div>

      <div className={s.deckImage}>
        <img alt={'deck-image'} src={defaultImage} />
      </div>
      <Input
        className={s.input}
        clearField={() => onChangeInputValue('')}
        onValueChange={onChangeInputValue}
        placeholder={'Search by question'}
        value={inputSearch}
        variant={'searchDecoration'}
      />

      {data && (
        <>
          <TableComponent
            setSort={onChangeSort}
            sort={orderBy}
            titles={columns}
            withOptions={isOwner}
          >
            <TableCards cards={data.items} isOwner={isOwner} />
          </TableComponent>
          <Pagination
            className={s.pagination}
            currentPage={+currentPage}
            onPageChange={onChangeCurrentPage}
            onValueChange={onChangePortionSize}
            pageSize={data.pagination.itemsPerPage}
            placeholder={data.pagination.itemsPerPage.toString()}
            totalCount={data.pagination.totalItems}
          />
        </>
      )}
    </div>
  )
}
