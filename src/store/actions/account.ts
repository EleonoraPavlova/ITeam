import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { RegisterResponse } from '@/types/auth.model'
import { UserProfile } from '@/types/user.model'

const BASE_URL = process.env.NEXT_PUBLIC_API_PROFILE_BASE_URL

export const registerUser = createAsyncThunk<RegisterResponse, UserProfile>(
  'auth/registerUser',
  async (data: UserProfile, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, data)
      console.log('response.data', response.data)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || 'Login failed')
    }
  }
)
