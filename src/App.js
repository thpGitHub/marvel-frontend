import './App.css'
// import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// ** Components **
// import Home from './components/home'
import Nav from './components/nav'
import Header from './components/header'
import Character from './components/character'
import Characters from './components/characters'
// ** Containers **
import Comic from './containers/comic'
import Comics from './containers/comics'
import Favoris from './containers/favoris'
import NotFound from './containers/notFound'
// ** Service ***
// import {fetchAllComics, fetchAllCharacters} from './services/thierry-api'

function App() {
  // const [comics, setComics] = useState()

  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comic/:id" element={<Comic />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
