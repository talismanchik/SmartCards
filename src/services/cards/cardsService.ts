import { baseApi } from '@/services/baseApi'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecksByID: builder.query<GetDecksByIDResponse, GetCardsArgs>({
        providesTags: ['Decks'],
        query: ({ id, ...args }) => ({
          params: args ?? undefined,
          url: `v1/decks/${id}/cards`,
        }),
      }),
    }
  },
})

export const { useGetDecksByIDQuery } = cardsService

export type GetCardsArgs = {
  answer?: string
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: null | string
  question?: string
}

export type GetDecksByIDResponse = {
  items: DecksByIDItems[]
  pagination: GetDecksByIDPagination
}
export type GetDecksByIDPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type DecksByIDItems = {
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
