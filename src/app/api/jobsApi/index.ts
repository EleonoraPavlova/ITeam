import { rapidapi } from '@/app/api/_utils/axios'
import { API_ROUTES } from '@/app/api/apiRoutes'
import { ApiResponse, GetJobByIdParams, JobsModel, SearchQueryParams } from '@/types/jobs.model'

export const getSearch = async (params: SearchQueryParams): Promise<JobsModel> => {
  try {
    const response = await rapidapi.get<ApiResponse>(API_ROUTES.search, { params })
    return response.data
  } catch (e: any) {
    throw new Error(e ?? 'Something went wrong while fetching search')
  }
}

export const getJobById = async (params: GetJobByIdParams): Promise<JobsModel> => {
  try {
    const response = await rapidapi.get<ApiResponse>(API_ROUTES.details, { params })
    return response.data
  } catch (e: any) {
    throw new Error(e ?? 'Error while fetching the job by id')
  }
}
