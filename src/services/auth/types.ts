export type User = {
  email: string
  name: string
  id: string
  isEmailVerified: boolean
  avatar: string
  created: string
  updated: string
}

export type LogoutArgs = { email: string; password: string }

type Pagination = {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

export type Paginated<T> = {
  pagination: Pagination
  items: T[]
}

export type Deck = {}
