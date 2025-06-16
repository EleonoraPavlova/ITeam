import { ReactNode } from 'react'

import { JobData } from '@/types/jobs.model'

export type LinkKey = keyof Pick<
  JobData,
  'employer_website' | 'employer_linkedin' | 'job_apply_link' | 'job_google_link'
>

export type LinkItem = {
  label: string
  key: LinkKey
}

export const links: LinkItem[] = [
  { label: 'Website', key: 'employer_website' },
  { label: 'LinkedIn', key: 'employer_linkedin' },
  { label: 'Apply', key: 'job_apply_link' },
  { label: 'Google Job', key: 'job_google_link' },
]

export type JobInfoKey = keyof Pick<
  JobData,
  | 'job_publisher'
  | 'job_employment_types'
  | 'job_description'
  | 'job_is_remote'
  | 'job_posted_human_readable'
  | 'job_benefits'
  | 'job_required_experience'
  | 'job_salary'
  | 'job_salary_currency'
  | 'job_salary_period'
  | 'job_highlights'
>

export type JobInfoItem = {
  label: string
  key: JobInfoKey
  formatter?: (_value: JobData[JobInfoKey], _data?: JobData) => ReactNode
}

export const JOB_INFO_ITEMS: JobInfoItem[] = [
  { label: 'Publisher', key: 'job_publisher' },
  { label: 'Employment types', key: 'job_employment_types' },
  { label: 'Description', key: 'job_description' },
  { label: 'Remote', key: 'job_is_remote' },
  { label: 'Posted', key: 'job_posted_human_readable' },
  { label: 'Benefits', key: 'job_benefits' },
  { label: 'Experience', key: 'job_required_experience' },
  { label: 'Salary', key: 'job_salary' },
  { label: 'Currency', key: 'job_salary_currency' },
  { label: 'Salary period', key: 'job_salary_period' },
  { label: 'Highlights', key: 'job_highlights' },
]
