import { Fragment,lazy,Suspense } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import MovieCard from './components/movie/MovieCard'
import SearchMovie from './components/movie/SearchMovie'
// import MoviesList from './components/movie/MoviesList';
import MovieBanner from './components/banner/MovieBanner';
// import Header from './components/layout/Header';
import Main from './components/layout/Main';
// import HomePage from './pages/HomePage';
// import MoviePage from './pages/MoviePage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
const HomePage = lazy(() => import('./pages/HomePage'))
const MoviePage = lazy(() => import('./pages/MoviePage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'))
// https://api.themoviedb.org/3/movie/now_playing?api_key=33ca101e71974821d244c04ed6f31284&language=vi
function App()
{

  return (
    <Fragment>
      <Suspense fallback={<></>}>
      <Routes>
        <Route element={<Main />}>
          {/* <Route path='/' element={ <SearchMovie />}></Route>
          <Route path="/" element={<MovieBanner/>} /> */}
          <Route path="/" element={
            <>
              {/* <SearchMovie /> */}
              <MovieBanner />
              <HomePage />
            </>
          }
          />
          <Route path='/movies' element={
            <>
            {/* <SearchMovie /> */}
            <MoviePage/>
            </>
          } 
            />
          <Route path='/movies/:moviesId' element={
            <>
            <MovieDetailsPage/>
          </>} />
        </Route>
      </Routes>
      {/* header */}
      {/* <Header/> */}


        {/* <HomePage/> */}
        </Suspense>
    </Fragment>
  )
}

export default App
