import './Characters.css'
import {useState, useEffect} from 'react'
// ** Components **
import Card from 'components/card/Card'
// ** Services **
import {fetchAllCharacters} from 'services/thierry-api'

export default function Characters({
  favoritesidCookies,
  favoriteCharacterID,
  setFavoritesidCookies,
  setFavoriteCharacterID,
}) {
  const [characters, setCharacters] = useState([])
  const [searchCharacters, setSearchCharacters] = useState('')

  useEffect(() => {
    fetchAllCharacters(searchCharacters).then(characters => {
      setCharacters(characters)
    })
  }, [searchCharacters])

  const handleChangeInput = e => {
    setSearchCharacters(e.target.value)
  }

  return (
    <div className="characters-container">
      <div className="characters-header">
        <h2>MARVEL CHARACTERS LIST</h2>
        <input
          type="search"
          value={searchCharacters}
          onChange={handleChangeInput}
          placeholder="SEARCH"
        />
      </div>

      <div className="characters-card-container">
        {characters?.results?.map(character => {
          return (
            <Card
              id={character._id}
              key={character._id}
              from="characters"
              name={character.name}
              linkTO={`/character/${character._id}`}
              description={character.description}
              picturePath={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              favoritesidCookies={favoritesidCookies}
              setFavoritesidCookies={setFavoritesidCookies}
              favoriteCharacterID={favoriteCharacterID}
              setFavoriteCharacterID={setFavoriteCharacterID}
            />
          )
        })}
      </div>
    </div>
  )
}
