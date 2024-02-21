import { Sort } from '@/components/ui/table/tableComponent'
import { Pagination } from '@/services/common.types'

export type DeckResponse = {
  items: Deck[]
  pagination: Pagination
}
export type Deck = {
  author: DeckAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type DeckAuthor = {
  id: string
  name: string
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: Sort | null | string //enum
}

export type CreateDeckArgs = {
  cover?: File | null //Form Data
  isPrivate?: boolean
  name: string
}
export type DeleteDeckArgs = {
  id: string
}
