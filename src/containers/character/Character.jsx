import './Character.css'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
// ** Components **
import Card from 'components/card/Card'
import DisplayComicsById from 'components/displayComicsById'
// ** Services **
import {fetchCharacter} from 'services/thierry-api.js'

export default function Character({
  favoriteComicID,
  setFavoriteComicID,
  favoriteCharacterID,
  setFavoriteCharacterID,
}) {
  const {id} = useParams()

  const [character, setCharacter] = useState()

  useEffect(() => {
    fetchCharacter(id).then(charac => {
      setCharacter(charac)
    })
  }, [id])

  return (
    <div>
      <Card
        id={character?._id}
        from="character"
        name={character?.name}
        linkTO={''}
        description={character?.description}
        picturePath={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
        favoriteComicID={favoriteComicID}
        setFavoriteComicID={setFavoriteComicID}
        favoriteCharacterID={favoriteCharacterID}
        setFavoriteCharacterID={setFavoriteCharacterID}
      />
      <div className="character-comicsband">
        <div>
          {character?.comics?.length > 0 ? (
            <h2>{`Comics liés a ${character?.name}`}</h2>
          ) : (
            <h2>{`Auncun comics liés a ${character?.name}`}</h2>
          )}
        </div>
      </div>
      <DisplayComicsById
        comicsIds={character?.comics}
        favoriteComicID={favoriteComicID}
        setFavoriteComicID={setFavoriteComicID}
      />
    </div>
  )
}
