export const ROUTES = {
  home: '/',
  jobs: 'jobs',
  liked: 'liked',
  createProfile: 'create-profile',
  login: 'login',
  getJobDetails: (job_id: string) => `/job-details/${job_id}`,
}
