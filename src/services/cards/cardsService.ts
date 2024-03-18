import { baseApi } from '@/services/baseApi'
import {
  CreateLearnGradeArgs,
  GetDeckArgs,
  GetDeckByIDCardsResponse,
  GetDeckByIDRCardsArgs,
  GetDeckResponse,
  GetLearnCardArgs,
  LearnResponse,
} from '@/services/cards/cards.types'
import { Deck } from '@/services/decks/decks.types'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<LearnResponse, { data: FormData; id: string }>({
        invalidatesTags: ['Cards'],
        query: args => ({
          body: args.data,
          method: 'POST',
          url: `v1/decks/${args.id}/cards`,
        }),
      }),
      createLearnGrade: builder.mutation<LearnResponse, CreateLearnGradeArgs>({
        invalidatesTags: ['Cards'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks/${args.cardId}/learn`,
        }),
      }),
      deleteCard: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Cards'],
        query: args => ({
          method: 'DELETE',
          url: `v1/cards/${args.id}`,
        }),
      }),
      getDeck: builder.query<GetDeckResponse, GetDeckArgs>({
        providesTags: ['Cards'],
        query: args => ({
          url: `v1/decks/${args.id}`,
        }),
      }),
      getDecksByIDCards: builder.query<GetDeckByIDCardsResponse, GetDeckByIDRCardsArgs>({
        providesTags: ['Cards'],
        query: ({ id, ...args }) => ({
          params: args ?? undefined,
          url: `v1/decks/${id}/cards`,
        }),
      }),
      getLearnCard: builder.query<LearnResponse, GetLearnCardArgs>({
        providesTags: ['Cards'],
        query: args => ({
          url: `v1/decks/${args.id}/learn`,
        }),
      }),
      updateCard: builder.mutation<Deck, { body: FormData; id: string | undefined }>({
        // invalidatesTags: ['Decks'],
        invalidatesTags: ['Cards'],
        query: args => ({
          body: args.body,
          method: 'PATCH',
          url: `v1/cards/${args.id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateCardMutation,
  useCreateLearnGradeMutation,
  useDeleteCardMutation,
  useGetDeckQuery,
  useGetDecksByIDCardsQuery,
  useGetLearnCardQuery,
  useUpdateCardMutation,
} = cardsService
