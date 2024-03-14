import { baseApi } from '@/services/baseApi'
import {
  GetDeckArgs,
  GetDeckByIDCardsResponse,
  GetDeckByIDRCardsArgs,
  GetDeckResponse,
} from '@/services/cards/cards.types'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDeck: builder.query<GetDeckResponse, GetDeckArgs>({
        providesTags: ['Decks'],
        query: args => ({
          url: `v1/decks/${args.id}`,
        }),
      }),
      getDecksByIDCards: builder.query<GetDeckByIDCardsResponse, GetDeckByIDRCardsArgs>({
        providesTags: ['Decks'],
        query: ({ id, ...args }) => ({
          params: args ?? undefined,
          url: `v1/decks/${id}/cards`,
        }),
      }),
      getLearnCard: builder.query<GetLearnResponse, GetLearnCardArgs>({
        providesTags: ['Decks'],
        query: args => ({
          url: `v1/decks/${args.id}/learn`,
        }),
      }),
    }
  },
})

export const { useGetDeckQuery, useGetDecksByIDCardsQuery, useGetLearnCardQuery } = cardsService

type GetLearnCardArgs = {
  id: string
  previousCardId?: string
}
export type GetLearnResponse = {
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
