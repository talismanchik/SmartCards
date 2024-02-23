import { CreateDeckArgs, Deck, DeckResponse, GetDecksArgs } from '@/services/decks/decksTypes'
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
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args,
          method: 'POST',
          url: 'v1/decks',
        }),
      }),
      getDecks: builder.query<DeckResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? undefined,
          url: 'v2/decks',
        }),
      }),
    }
  },
  reducerPath: 'decksApi',
  tagTypes: ['Decks'],
})

export const { useCreateDeckMutation, useGetDecksQuery } = decksApi
