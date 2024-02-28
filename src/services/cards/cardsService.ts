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
    }
  },
})

export const { useGetDeckQuery, useGetDecksByIDCardsQuery } = cardsService
