import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { UserProfile, UserResponse } from '@/types/user.model'

const BASE_URL = process.env.NEXT_PUBLIC_API_PROFILE_BASE_URL

export const registerUser = createAsyncThunk<UserResponse, UserProfile>(
  'account/registerUser',
  async (data: UserProfile, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, data)

      return response.data
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || 'Login failed')
    }
  }
)
