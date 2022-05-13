import './Characters.css'
import {useState, useEffect} from 'react'
import {fetchAllCharacters} from 'services/thierry-api'
import Card from 'components/card/Card'

export default function Characters() {
  const [characters, setCharacters] = useState([])
  //   const [isLoading, setIsLoading] = useState(true)
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
          placeholder="SEARCH"
          value={searchCharacters}
          onChange={handleChangeInput}
        />
      </div>

      <div className="characters-card-container">
        {characters?.results?.map(character => {
          return (
            <Card
              picturePath={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              name={character.name}
              description={character.description}
              id={character._id}
              linkTO={`/character/${character._id}`}
              key={character._id}
            />
          )
        })}
      </div>
    </div>
  )
}
