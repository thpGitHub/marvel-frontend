import './Favoris.css'
import {useState, useEffect} from 'react'
// ** Components **
import Card from 'components/card'
// ** Services **
import {fetchComicsByIds, fetchCharactersByIds} from 'services/thierry-api'

export default function Favoris({favoriteCharacterID, favoriteComicID}) {
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
              id={favorite?.data?._id}
              key={favorite?.data?._id}
              from="favori-characters"
              name={favorite?.data?.name}
              linkTO={'#'}
              description={favorite?.data?.description}
              picturePath={`${favorite?.data?.thumbnail?.path}.${favorite?.data?.thumbnail?.extension}`}
            />
          )
        })}
      </div>

      <div>
        {favoriteComics?.length > 0 && (
          <div className="favoris-comicsband">
            <h2>Comics favoris</h2>
          </div>
        )}
      </div>
      <div className="favoris-card-container">
        {favoriteComics?.map(favorite => {
          return (
            <Card
              id={favorite?.data?._id}
              key={favorite?.data?._id}
              from="favori-comics"
              name={favorite?.data?.title}
              linkTO={'#'}
              description={favorite?.data?.description}
              picturePath={`${favorite?.data?.thumbnail?.path}.${favorite?.data?.thumbnail?.extension}`}
            />
          )
        })}
      </div>
    </>
  )
}
