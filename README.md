# Job Search App

## Description

An application to search for recipes using Next.js 14 and the Rapid API.  
Allows you to search job by search name, datePosted, and employment types, view job list, and see detailed job information.

### Link:

> [Job-App](https://find-job-kappa.vercel.app/) - web app Vercel

## Installation and Running

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Install dependencies:

   ```bash
    npm install
    # or
    yarn
   ```

3. Run the development server:
   ```bash
    npm run dev
    # or
    yarn dev
   ```

## Features

### Home Page ( / )

- Input field for job's search
- Dropdown to select for date posted
- Popover for sort by employment types
- Navigates to `/jobs` page with query parameters on button click

### Jobs Page (`/jobs`)

- SSR fetching recipes from Rapid API
- Displays list of jobs with logo and titles and other
- Click on a job card to navigate to the job detail page

### Job Details Page (`/job-details/${id}`)

- SSR fetches detailed job information by ID
- Displays job title, properties and other data

### Job Liked Page (`/liked`)

- Displays liked jobs

### Login Page (`/login`)

- Displays login form with validations(Formik, yup)

## Technical Details

- Built with Next.js 14 using the App Router
- Used React Suspense to handle loading states
- Styled with Tailwind CSS for responsive design and accessibility
- Implemented UI components using Radix UI for accessibility and composability
- Added Husky for Git hooks to ensure code quality (e.g., linting/prettier checks on commit)
- Proper error handling for all API requests

## Resources

- Rapid API Documentation: https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch
- Next.js 14 App Router Docs: https://nextjs.org/docs/14/app/building-your-application
- Tailwind CSS: https://tailwindcss.com/docs
