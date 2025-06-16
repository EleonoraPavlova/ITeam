'use client'
import { Heart } from 'lucide-react'
import { ReactElement, useEffect, useState } from 'react'

import { Button } from '@/shared/button'

interface Props {
  jobId: string
}

const LikeButton = ({ jobId }: Props): ReactElement => {
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likedJobs') || '[]')
    setLiked(savedLikes.includes(jobId))
  }, [jobId])

  const toggleLike = () => {
    const savedLikes = JSON.parse(localStorage.getItem('likedJobs') || '[]')
    let updatedLikes
    if (savedLikes.includes(jobId)) {
      updatedLikes = savedLikes.filter((id: string) => id !== jobId)
    } else {
      updatedLikes = [...savedLikes, jobId]
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
