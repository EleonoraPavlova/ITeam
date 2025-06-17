import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { registerUser } from '@/store/actions/account'
import { logout } from '@/store/reducers/auth'
import { UserResponse } from '@/types/user.model'

interface RegisterState {
  account: UserResponse | null
  isLoading: boolean
  error: string | null
  isAuthenticated: boolean
}

const initialState: RegisterState = {
  account: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount(state, action: PayloadAction<UserResponse>) {
      state.account = action.payload
      state.isAuthenticated = true
      state.isLoading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<UserResponse>) => {
        state.isLoading = false
        state.account = action.payload
        state.isAuthenticated = true
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(logout, (state) => {
        state.account = null
        state.isAuthenticated = false
        state.isLoading = false
        state.error = null
      })
  },
})

export const { setAccount } = accountSlice.actions
export default accountSlice.reducer
