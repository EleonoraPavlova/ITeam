import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { registerUser } from '@/store/actions/account'
import { RegisterUserResponse } from '@/types/user.model'

interface RegisterState {
  account: RegisterUserResponse | null
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
    setAccount(state, action: PayloadAction<RegisterUserResponse>) {
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
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<RegisterUserResponse>) => {
        state.isLoading = false
        state.account = action.payload
        state.isAuthenticated = true
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { setAccount } = accountSlice.actions
export default accountSlice.reducer
