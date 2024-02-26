import { baseApi } from '@/services/baseApi'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecksByID: builder.query<GetDecksByIDResponse, GetCardsArgs>({
        providesTags: ['Decks'],
        query: args => ({
          url: `v1/decks/${args.id}/cards`,
        }),
      }),
    }
  },
})

export const { useGetDecksByIDQuery } = cardsService

export type GetCardsArgs = {
  id: string
}

export type GetDecksByIDResponse = {
  items: GetDecksByIDItems[]
  pagination: GetDecksByIDPagination
}
export type GetDecksByIDPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type GetDecksByIDItems = {
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
