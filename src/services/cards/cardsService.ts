import { baseApi } from '@/services/baseApi'
import { GetDeckByIDRArgs, GetDeckByIDResponse } from '@/services/cards/cards.types'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      // eslint-disable-next-line no-undef
      getDecksByID: builder.query<GetDeckByIDResponse, GetDeckByIDRArgs>({
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
