import { DeckResponse } from '@/services/decks/decksTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const decksApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<DeckResponse, void>({
        query: () => `v2/decks`,
      }),
    }
  },
  reducerPath: 'decksApi',
})

export const { useGetDecksQuery } = decksApi
