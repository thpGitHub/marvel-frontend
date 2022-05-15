import './App.css'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// ** Components **
import Nav from './components/nav'
import Header from './components/header'
import Character from './containers/character'
import Characters from './containers/characters'
// ** Containers **
import Comic from './containers/comic'
import Comics from './containers/comics'
import Favoris from './containers/favoris'
import NotFound from './containers/notFound'
// ** Vendor **
import Cookies from 'js-cookie'
// ** Services ***

function App() {
  const [favoritesidCookies, setFavoritesidCookies] = useState([])

  const [favoriteCharacterID, setFavoriteCharacterID] = useState([])
  const [favoriteComicID, setFavoriteComicID] = useState([])

  /**
   * get cookies characters
   */
  useEffect(() => {
    let responseCookie = Cookies.get('ListFavoritesIdsCharacters')
    if (responseCookie) {
      let responseCookie_parse_array = JSON.parse(responseCookie)

      setFavoriteCharacterID(responseCookie_parse_array)
    }
  }, [])
  /**
   * get cookies comics
   */
  useEffect(() => {
    let responseCookie = Cookies.get('ListFavoritesIdsComics')
    if (responseCookie) {
      let responseCookie_parse_array = JSON.parse(responseCookie)

      setFavoriteComicID(responseCookie_parse_array)
    }
  }, [])

  return (
    <Router>
      <Header />
      <Nav
        lengthFavoris={favoriteCharacterID.length + favoriteComicID.length}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Characters
              favoritesidCookies={favoritesidCookies}
              setFavoritesidCookies={setFavoritesidCookies}
              favoriteCharacterID={favoriteCharacterID}
              setFavoriteCharacterID={setFavoriteCharacterID}
            />
          }
        />
        <Route
          path="/character/:id"
          element={
            <Character
              favoriteComicID={favoriteComicID}
              setFavoriteComicID={setFavoriteComicID}
              favoriteCharacterID={favoriteCharacterID}
              setFavoriteCharacterID={setFavoriteCharacterID}
            />
          }
        />
        <Route
          path="/comics"
          element={
            <Comics
              favoriteComicID={favoriteComicID}
              setFavoriteComicID={setFavoriteComicID}
            />
          }
        />
        <Route
          path="/comic/:id"
          element={
            <Comic
              favoriteComicID={favoriteComicID}
              setFavoriteComicID={setFavoriteComicID}
            />
          }
        />
        <Route
          path="/favoris"
          element={
            <Favoris
              favoritesidCookies={favoritesidCookies}
              setFavoritesidCookies={setFavoritesidCookies}
              favoriteCharacterID={favoriteCharacterID}
              setFavoriteCharacterID={setFavoriteCharacterID}
              favoriteComicID={favoriteComicID}
              setFavoriteComicID={setFavoriteComicID}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
