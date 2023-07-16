import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

interface User {
  username: string
  isLoggedIn?: boolean
}

const initialUserState: User = {
  username: '',
  isLoggedIn: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<User>) => {
      state.username = payload.username
      state.isLoggedIn = true
    },
    logoutUser: (state) => {
      state.username = ''
      state.isLoggedIn = false
    },
  },
})

export default userSlice.reducer
export const { loginUser, logoutUser } = userSlice.actions
export const useUsername = ({ user }: RootState) => user.username
export const isLoggedIn = ({ user }: RootState) => user.isLoggedIn
