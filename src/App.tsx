import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Tvseries from './pages/Tvseries'



function App() {



  return (
    <>
      <div className='header'>
        <Link to={'/'}><img src="Movie.svg" alt="" /></Link>
        <nav>
          <Link to={'/'}><img src="icon-nav-home.svg" alt="" /></Link>
          <Link to={'/movies'}><img src="icon-nav-movies.svg" alt="" /></Link>
          <Link to={'/tvseries'}><img src="icon-nav-tv-series.svg" alt="" /></Link>
        </nav>
        <img src="Oval.svg" alt="" />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tvseries" element={<Tvseries/>}/>
      </Routes>
    </>
  )
}

export default App