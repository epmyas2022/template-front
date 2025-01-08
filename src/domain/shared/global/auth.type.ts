export type User = {
  id: number
  name: string
  username: string
}

export type Auth = {
  user: User | null
  token: string | null
  isLoggedIn: boolean
}
