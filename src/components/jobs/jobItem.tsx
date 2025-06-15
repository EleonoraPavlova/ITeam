import Image from 'next/image'
import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

import { ROUTES } from '@/app/api/routes'
import { Typography } from '@/shared/typography'
import { JobData } from '@/types/jobs.model'

interface Props {
  data: JobData
  isFullVersion?: boolean
}

const JobItem = ({ data, isFullVersion = false }: Props): ReactElement => {
  const Wrapper = ({ children }: { children: ReactNode }) =>
    isFullVersion ? (
      <div className='flex flex-col gap-3 mb-2'>{children}</div>
    ) : (
      <Link href={ROUTES.getJobDetails(data.job_id)}>{children}</Link>
    )

  return (
    <div className='rounded-2xl border p-3 shadow-sm'>
      <Wrapper>
        <div className='relative w-full h-[190px] rounded-xl overflow-hidden mb-2'>
          <Image
            src={data.employer_logo || ''}
            alt={data.employer_name}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 33vw'
          />
        </div>

        <Typography as='h4' variant='h4' className='line-clamp-2'>
          {data.employer_name}
        </Typography>
        {/*<div className='flex gap-3 justify-between'>*/}
        {/*  {'aggregateLikes' in recipe && <Typography>❤️ {recipe.aggregateLikes}</Typography>}*/}

        {/*  {'cookingMinutes' in recipe && typeof recipe.cookingMinutes === 'number' && recipe.cookingMinutes > 0 && (*/}
        {/*    <Typography>⏱️ Min: {recipe.cookingMinutes}</Typography>*/}
        {/*  )}*/}
        {/*</div>*/}
      </Wrapper>
      {/*{isFullVersion && 'extendedIngredients' in recipe && Array.isArray(recipe.extendedIngredients) && (*/}
      {/*  <>*/}
      {/*    <Typography as='h6' className='mb-2'>*/}
      {/*      🧂Ingredients ( {recipe.extendedIngredients.length} )*/}
      {/*    </Typography>*/}
      {/*    <IngredientsList ingredients={recipe.extendedIngredients} />*/}
      {/*    <Typography>🌾 Gluten Free: {recipe.glutenFree ? 'Yes' : 'No'}</Typography>*/}
      {/*  </>*/}
      {/*)}*/}
    </div>
  )
}

export default JobItem
