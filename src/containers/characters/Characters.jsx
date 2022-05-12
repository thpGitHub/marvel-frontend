import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {fetchAllCharacters} from 'services/thierry-api'
// import {fetchAllCharacters} from '../../services/thierry-api'

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
    <div>
      <h2>MARVEL CHARACTERS LIST</h2>
      <input
        type="search"
        placeholder="SEARCH"
        value={searchCharacters}
        onChange={handleChangeInput}
      />
      <div>
        {characters?.results?.map(character => {
          return (
            <div key={character._id}>
              <Link to={`/character/${character._id}`}>
                <div>{character.name}</div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
