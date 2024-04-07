import React from 'react'
import './style.scss'
import HeroBanner from './heroBanner'
import Trending from './trending'
import Popular from './popular'
import TopRated from './topRated'

const Home = () => {
  return (
    <div className='home__page'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home
