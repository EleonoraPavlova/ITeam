import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { Auth } from '@/types/auth.model'
import { UserResponse } from '@/types/user.model'

const BASE_URL = process.env.NEXT_PUBLIC_API_PROFILE_BASE_URL

export const loginUser = createAsyncThunk<UserResponse, Auth>(
  'auth/loginUser',
  async (data: Auth, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, data)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || 'Login failed')
    }
  }
)
