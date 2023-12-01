import React from 'react'
import BannerImage from './BannerImage'
import Banner from './Banner'

function Home() {
  return (
    <div><BannerImage imageUrl="/banner.png" altText="Banner Image" />
    <Banner/>
    </div>
  )
}

export default Home