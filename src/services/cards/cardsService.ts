import { baseApi } from '@/services/baseApi'
import { GetCardsArgs, GetDecksByIDResponse } from '@/services/cards/cards.types'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      // eslint-disable-next-line no-undef
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
