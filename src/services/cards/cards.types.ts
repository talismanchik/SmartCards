export type GetDeckByIDRCardsArgs = {
  answer?: string
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: null | string
  question?: string
}

export type GetDeckByIDCardsResponse = {
  items: DeckByIDCardsItems[]
  pagination: GetDeckByIDCardsPagination
}
export type GetDeckByIDCardsPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type DeckByIDCardsItems = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export type GetDeckArgs = {
  id: string
}

export type GetDeckResponse = {
  author: GetDeckAuthorResponse
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type GetDeckAuthorResponse = {
  id: string
  name: string
}

export type CreateLearnGradeArgs = {
  cardId: string
  grade: number
}

export type GetLearnCardArgs = {
  id: string
  previousCardId?: string
}

export type CreateCardArgs = {
  answer: string
  answerImg?: string
  answerVideo?: string
  id: string
  question: string
  questionImg?: string
  questionVideo?: string
}

export type LearnResponse = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}
