import { ReactElement } from 'react'

import Search from '@/components/search'

export const revalidate = 86400

const Home = (): ReactElement => {
  return (
    <div className='py-0 px-[30px]'>
      <Search />
    </div>
  )
}

export default Home
