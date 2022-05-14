import './Favoris.css'
import {useState, useEffect} from 'react'
import Card from 'components/card'
import {fetchComicsByIds, fetchCharactersByIds} from 'services/thierry-api'

export default function Favoris({
  favoriteCharacterID,
  favoriteComicID,
}) {
  const [favoriteCharacters, setFavoriteCharacter] = useState()
  const [favoriteComics, setFavoriteComics] = useState()

  useEffect(() => {
    fetchCharactersByIds(favoriteCharacterID).then(data => {
      setFavoriteCharacter(data)
    })
  }, [favoriteCharacterID])

  useEffect(() => {
    fetchComicsByIds(favoriteComicID).then(data => {
      setFavoriteComics(data)
    })
  }, [favoriteComicID])

  return (
    <>
      <div>
        {favoriteCharacters?.length > 0 && (
          <div className="favoris-comicsband">
            <h2>Personnages favoris</h2>
          </div>
        )}
      </div>

      <div className="favoris-card-container">
        {favoriteCharacters?.map(favorite => {
          return (
            <Card
              from="favori"
              picturePath={`${favorite?.data?.thumbnail?.path}.${favorite?.data?.thumbnail?.extension}`}
              name={favorite?.data?.name}
              description={favorite?.data?.description}
              id={favorite?.data?._id}
              linkTO={'#'}
              key={favorite?.data?._id}
            />
          )
        })}
      </div>

      <div>
        {favoriteCharacters?.length > 0 && (
          <div className="favoris-comicsband">
            <h2>Comics favoris</h2>
          </div>
        )}
      </div>
      <div className="favoris-card-container">
        {favoriteComics?.map(favorite => {
          return (
            <Card
              from="favori"
              picturePath={`${favorite?.data?.thumbnail?.path}.${favorite?.data?.thumbnail?.extension}`}
              name={favorite?.data?.title}
              description={favorite?.data?.description}
              id={favorite?.data?._id}
              linkTO={'#'}
              key={favorite?.data?._id}
            />
          )
        })}
      </div>
    </>
  )
}
