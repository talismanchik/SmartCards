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

export type UpdateProfileArgs = { name: string } | FormData

export type SignUpArgs = {
  email: string
  name?: string
  password: string
  sendConfirmationEmail: boolean
  subject?: string
}

export type SignUpResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}
