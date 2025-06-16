import axios from 'axios'

export const fetcher = async (url: string) => {
  try {
    const fullUrl = url.startsWith('http') ? url : `${process.env.API_PROFILE_BASE_URL}${url}`

    const response = await axios.get(fullUrl)

    return response.data
  } catch (error: any) {
    const err = new Error(error.response?.data?.message || 'An error occurred during data fetching.') as Error & {
      info?: any
      status?: number
    }
    err.info = error.response?.data
    err.status = error.response?.status
    throw err
  }
}
