export type ApiResponse = {
  status: 'ERROR' | 'OK'
  request_id: string
  data: JobData[]
  error?: {
    message: string
    code: number
  }
}

export type SearchQueryParams = {
  query: string
  page?: number
  num_pages?: number
  date_posted?: DatePosted
  country?: string
  language?: string
  fields?: string[]
  exclude_job_publishers?: string
  radius?: number
  job_requirements?: string
  employment_types?: EmploymentTypesOptionValue
  work_from_home?: boolean
}

export enum DatePosted {
  All = 'all',
  Today = 'today',
  ThreeDays = '3days',
  Week = 'week',
  Month = 'month',
}

export type ApplyOption = {
  publisher: string
  apply_link: string
  is_direct: boolean
}

export type JobRequiredExperience = {
  no_experience_required: boolean
  required_experience_in_months: number | null
  experience_mentioned: boolean
  experience_preferred: boolean
}

export type JobHighlights = {
  Qualifications?: string[]
  Responsibilities?: string[]
  Benefits?: string[]
  [key: string]: string[] | undefined
}

export type JobData = {
  job_id: string
  employer_name: string
  employer_logo: string | null
  employer_website: string | null
  employer_company_type: string | null
  employer_linkedin: string | null
  job_publisher: string
  job_employment_type: string
  job_employment_types: string[]
  job_employment_type_text: string
  job_title: string
  job_apply_link: string
  job_apply_is_direct: boolean
  job_apply_quality_score: number | null
  apply_options: ApplyOption[]
  job_description: string
  job_is_remote: boolean
  job_posted_human_readable: string
  job_posted_at_timestamp: number
  job_posted_at_datetime_utc: string
  job_location: string
  job_city: string
  job_state: string
  job_country: string
  job_latitude: number
  job_longitude: number
  job_benefits: string[] | null
  job_google_link: string
  job_offer_expiration_datetime_utc: string | null
  job_offer_expiration_timestamp: number | null
  job_required_experience: JobRequiredExperience
  job_salary: string | null
  job_min_salary: number | null
  job_max_salary: number | null
  job_salary_currency: string | null
  job_salary_period: string | null

  job_highlights: JobHighlights

  job_job_title: string | null
  job_posting_language: string | null
  job_onet_soc: string | null
  job_onet_job_zone: string | null
  job_occupational_categories: string[] | null
  job_naics_code: string | null
  job_naics_name: string | null
}

export type JobsModel = {
  data: JobData[]
}

export type GetJobByIdParams = Pick<JobData, 'job_id'> & {
  country?: string
  language?: string
  fields?: string[]
}

export const EMPLOYMENT_TYPES_OPTIONS = [
  { label: 'FULLTIME', value: 'FULLTIME' },
  { label: 'CONTRACTOR', value: 'CONTRACTOR' },
  { label: 'PARTTIME', value: 'PARTTIME' },
  { label: 'INTERN', value: 'INTERN' },
] as const

export type EmploymentTypesOptionValue = (typeof EMPLOYMENT_TYPES_OPTIONS)[number]['value']

export const DATE_POSTED_OPTIONS = [
  { label: 'All Time', value: DatePosted.All },
  { label: 'Last 24 hours', value: DatePosted.Today },
  { label: 'Last 3 days', value: DatePosted.ThreeDays },
  { label: 'Last week', value: DatePosted.Week },
  { label: 'Last month', value: DatePosted.Month },
] as const

export type DatePostedOptionValue = (typeof DATE_POSTED_OPTIONS)[number]['value']
