export interface User {
  username: string
  isLoggedIn: boolean
}

export interface Post {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

export interface newPost {
  username: string
  title: string
  content: string
}

export interface EditPost {
  title: string
  content: string
}
