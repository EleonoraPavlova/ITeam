import { ReactElement } from 'react'

// interface Props {
//   DetailsList: any[]
// }

export const mockJobData: any[] = [
  {
    job_id: 'abc123',
    employer_name: 'Tech Innovators LLC',
    employer_logo: 'https://example.com/logo.png',
    employer_website: 'https://techinnovators.com',
    employer_company_type: 'Private',
    employer_linkedin: 'https://linkedin.com/company/techinnovators',
    job_publisher: 'Indeed',
    job_employment_type: 'FULLTIME',
  },
  {
    job_id: 'abc121',
    employer_name: 'Tech Innovators LLC',
    employer_logo: 'https://example.com/logo.png',
    employer_website: 'https://techinnovators.com',
    employer_company_type: 'Private',
    employer_linkedin: 'https://linkedin.com/company/techinnovators',
    job_publisher: 'Indeed',
    job_employment_type: 'FULLTIME',
  },
]

const DetailsList = (): ReactElement => {
  return (
    <ul className='list-disc list-inside space-y-1 mb-3'>
      {mockJobData.map((item) => (
        <li key={item.job_id}>
          {item.employer_name} — {item.job_publishe}
        </li>
      ))}
    </ul>
  )
}

export default DetailsList
