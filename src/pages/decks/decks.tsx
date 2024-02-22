import { Column, TableComponent } from '@/components/ui/table/tableComponent'
import { TableDecks } from '@/pages/decks/tableBody/tableDecks'
import { useGetDecksQuery } from '@/services/decks/decksApi'

export const Decks = () => {
  const { data, error, isLoading } = useGetDecksQuery()

  console.log(data)
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error: {JSON.stringify(error)}...</h1>
  }

  return (
    <>
      <TableComponent titles={titles} withOptions>
        {data && <TableDecks decks={data.items} />}
      </TableComponent>
    </>
  )
}

const titles: Column[] = [
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
