import React from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import MoviePage from './pages/MoviePage/MoviePage'
import SearchPage from './pages/SearchPage/SearchPage'
import ActorPage from './pages/ActorPage/ActorPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/movie/:name" element={<MoviePage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/actor/:name" element={<ActorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
