import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Auth } from '@/types/auth.model'

import { loginUser } from '../actions/auth'

interface AuthState {
  userCreds: Auth | null
  isLoading: boolean
  error: string | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  userCreds: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.userCreds = null
      state.isAuthenticated = false
      state.isLoading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<Auth>) => {
        state.isLoading = false
        state.userCreds = action.payload
        state.isAuthenticated = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
