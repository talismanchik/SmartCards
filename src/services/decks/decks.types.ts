import { Pagination } from '@/services/common.types'

export type DeckResponse = {
  items: Deck[]
  pagination: Pagination
}
export type DeckAuthor = {
  id: string
  name: string
}
export type Deck = {
  author: DeckAuthor
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: null | string
}
export type GetMinMaxCards = {
  max: number
  min: number
}

export type CreateDeckArgs = {
  cover?: File | null | string
  isPrivate?: boolean
  name: string
}

export type UpdateDeleteDeckArgs = {
  id: string
}
