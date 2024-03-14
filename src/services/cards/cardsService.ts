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

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createLearnGrade: builder.mutation<LearnResponse, CreateLearnGradeArgs>({
        invalidatesTags: ['Cards'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks/${args.cardId}/learn`,
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
    }
  },
})

export const {
  useCreateLearnGradeMutation,
  useGetDeckQuery,
  useGetDecksByIDCardsQuery,
  useGetLearnCardQuery,
} = cardsService
