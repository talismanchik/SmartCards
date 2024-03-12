import { baseApi } from '@/services/baseApi'
import {
  CreateDeckArgs,
  Deck,
  DeckResponse,
  GetDecksArgs,
  GetMinMaxCards,
  UpdateDeleteDeckArgs,
} from '@/services/decks/decks.types'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDeckArgs | FormData>({
        invalidatesTags: ['Decks'],
        query: body => ({
          body,
          method: 'POST',
          url: 'v1/decks',
        }),
      }),
      deleteDeck: builder.mutation<Deck, UpdateDeleteDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          method: 'DELETE',
          url: `v1/decks/${args.id}`,
        }),
      }),
      getDecks: builder.query<DeckResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? undefined,
          url: 'v2/decks',
        }),
      }),
      getMinMaxCards: builder.query<GetMinMaxCards, void>({
        providesTags: ['Decks'],
        query: () => ({
          url: `v2/decks/min-max-cards`,
        }),
      }),
      updateDeck: builder.mutation<Deck, { body: FormData; id: string }>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args.body,
          method: 'PATCH',
          url: `v1/decks/${args.id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
  useUpdateDeckMutation,
} = decksService
