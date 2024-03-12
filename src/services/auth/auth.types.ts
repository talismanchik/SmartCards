export type MeResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type loginResponse = {
  accessToken: string
}
export type LoginArgs = {
  email: string
  password: string
  rememberMe: boolean
}

export type UpdateProfileArgs = FormData
