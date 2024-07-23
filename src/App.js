import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import fetchDataFromApi from './utils/api.js';
import { getApiConfiguration, getGenres } from './store/homeSlice.js';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Details from './pages/details';
import SearchResult from './pages/searchResult';
import PageNotFound from './pages/404';
import Explore from './pages/explore';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig()
    genresCall()

  }, [])


  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')

      .then((res) => {
        console.log(res);
        const baseUrl = res.images.secure_base_url ? res.images.secure_base_url : '';
        const url = {
          backdrop: baseUrl + "original",
          poster: baseUrl + "original",
          profile: baseUrl + "original"
        }
        dispatch(getApiConfiguration(url))
      })
  }

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data?.map(({ genres }) => {
      return genres?.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

