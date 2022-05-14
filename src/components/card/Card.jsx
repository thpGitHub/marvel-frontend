import {Link} from 'react-router-dom'
import HeartPlus from 'assets/img/favorites/heart-circle-plus'
import Cookies from 'js-cookie'

export default function Card({
  from,
  picturePath,
  name,
  description,
  id,
  linkTO,
  favoriteCharacterID,
  setFavoriteCharacterID,
  favoriteComicID,
  setFavoriteComicID
}) {
  const handleCookie = () => {
    /**
     * Create cookie for charactere
     */
    if (from === 'character') {
      const favoriteId = [...favoriteCharacterID, id]
      const favoriteId_json_str = JSON.stringify(favoriteId)
      Cookies.set('ListFavoritesIdsCharacters', favoriteId_json_str)

      setFavoriteCharacterID(favoriteId)
    }
    /**
     * Create cookie for comic
     */
    if(from === 'comics') {
      const favoriteId = [...favoriteComicID, id]
      const favoriteId_json_str = JSON.stringify(favoriteId)
      Cookies.set('ListFavoritesIdsComics', favoriteId_json_str)

      setFavoriteComicID(favoriteId)
    }
  }
  return (
    <div className="card">
      <Link to={linkTO} key={id}>
        <figure>
          <img src={picturePath} alt="figure character" />
          <img
            src={HeartPlus}
            alt="figure heart plus"
            className="card-favorite"
            onClick={handleCookie}
          />
        </figure>
        <div className="card-description">
          <h3>{name}</h3>
          <p className="description">{description}</p>
        </div>
      </Link>
    </div>
  )
}
