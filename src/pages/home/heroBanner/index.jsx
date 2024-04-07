import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'
import { useSelector } from 'react-redux'
import useFetch from '../../../hooks'
import Img from "../../../components/lazyLoadingImages"
import ContentWrapper from '../../../components/contentWrapper'
const HeroBanner = () => {

  const [background, setBackground] = useState("");
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home)

  const { data, loading } = useFetch("/movie/upcoming")

  useEffect(() => {

    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bg)
  }, [data, url])

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }


  return (
    <div className='hero__banner'>
      {!loading && <div className="backdrop-img">
        <Img src={background} />
      </div>}
      <div className="hero__banner__opacity-layer"></div>
      <ContentWrapper>
        <div className="hero__banner__content">
          <span className="hero__banner__content__title">Welcome.</span>
          <span className="hero__banner__content__subtitle">Millions of movies, TV shows and people to discover. Explore now.</span>
          <div className="hero__banner__content__searchinput">
            <input
              type="text"
              placeholder='Search for a movie or tv show.....'
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            {/* <button type='sumit'>Search</button> */}
            <button type='button' onClick={() => navigate(`/search/${query}`)}>Search</button>
          </div>
        </div>
      </ContentWrapper>

    </div>
  )
}

export default HeroBanner;
