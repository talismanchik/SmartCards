export type DeckResponse = {
  items: Deck[]
  maxCardsCount: number
  pagination: DeckPagination
}
export type DeckAuthor = {
  id: string
  name: string
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
export type DeckPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
