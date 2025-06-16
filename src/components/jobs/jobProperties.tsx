import { ReactElement } from 'react'

import { JOB_INFO_ITEMS, JobInfoItem, JobInfoKey } from '@/components/jobs/const'
import { Typography } from '@/shared/typography'

interface Props {
  data: JobInfoItem[]
}

const JobProperties = ({ data }: Props): ReactElement => {
  const renderValue = (key: JobInfoKey): string => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const value = data[key]

    switch (key) {
      case 'job_employment_types':
        return value && Array.isArray(value) && value.length ? value.join(', ') : 'N/A'
      case 'job_is_remote':
        return value ? 'Yes' : 'No'
      case 'job_benefits':
        return value && Array.isArray(value) && value.length ? value.join(', ') : 'N/A'
      case 'job_required_experience':
        return value
          ? `${value.required_experience_in_months ?? 'N/A'} months, mentioned: ${
              value.experience_mentioned ? 'Yes' : 'No'
            }, preferred: ${value.experience_preferred ? 'Yes' : 'No'}`
          : 'N/A'
      case 'job_highlights':
        if (!value) return 'N/A'
        const parts = []
        if (value.Qualifications?.length) parts.push(`Qualifications: ${value.Qualifications.join(', ')}`)
        if (value.Responsibilities?.length) parts.push(`Responsibilities: ${value.Responsibilities.join(', ')}`)
        if (value.Benefits?.length) parts.push(`Benefits: ${value.Benefits.join(', ')}`)
        return parts.length ? parts.join(' | ') : 'N/A'
      default:
        return value ?? 'N/A'
    }
  }

  return (
    <>
      {JOB_INFO_ITEMS.map((item) => (
        <Typography key={item.label}>
          {item.label}:<span className='px-3'>{renderValue(item.key)}</span>
        </Typography>
      ))}
    </>
  )
}

export default JobProperties
