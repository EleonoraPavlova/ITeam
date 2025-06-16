'use client'
import { Heart } from 'lucide-react'
import { ReactElement, useEffect, useState } from 'react'

import { Button } from '@/shared/button'
import { JobData } from '@/types/jobs.model'

interface Props {
  data: JobData
}

const LikeButton = ({ data }: Props): ReactElement => {
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const savedLikedJobs: JobData[] = JSON.parse(localStorage.getItem('likedJobs') || '[]')
    setLiked(savedLikedJobs.some((savedJob) => savedJob.job_id === data.job_id))
  }, [data.job_id])

  const toggleLike = () => {
    const savedLikedJobs: JobData[] = JSON.parse(localStorage.getItem('likedJobs') || '[]')
    let updatedLikes: JobData[]

    const isAlreadyLiked = savedLikedJobs.some((savedJob) => savedJob.job_id === data.job_id)

    if (isAlreadyLiked) {
      updatedLikes = savedLikedJobs.filter((savedJob) => savedJob.job_id !== data.job_id)
    } else {
      updatedLikes = [...savedLikedJobs, data]
    }

    localStorage.setItem('likedJobs', JSON.stringify(updatedLikes))
    setLiked(!liked)
  }

  return (
    <Button onClick={toggleLike} variant='ghost'>
      <Heart
        width={18}
        height={18}
        className={`transition-colors ${
          liked ? 'fill-[var(--color-destructive)] text-[var(--color-destructive)]' : 'text-muted-foreground'
        }`}
      />
    </Button>
  )
}

export default LikeButton
