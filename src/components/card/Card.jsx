import {useState} from 'react'
import {Link} from 'react-router-dom'
// ** Vendor **
import Cookies from 'js-cookie'
// ** Assets **
import HeartPlus from 'assets/img/favorites/heart-circle-plus'
import HeartMinus from 'assets/img/favorites/heart-circle-minus'
// import { useState } from 'react'

export default function Card({
  id,
  from,
  name,
  linkTO,
  description,
  picturePath,
  favoriteComicID,
  setFavoriteComicID,
  favoriteCharacterID,
  setFavoriteCharacterID,
}) {
  const [favoriteExist, setFavoriteExist] = useState(false)

  const handleCookie = () => {
    /**
     * Create cookie for character
     */
    if (
      (from === 'character' || from === 'characters') &
      !favoriteCharacterID?.includes(id)
    ) {
      const favoriteId = [...favoriteCharacterID, id]
      const favoriteId_json_str = JSON.stringify(favoriteId)
      Cookies.set('ListFavoritesIdsCharacters', favoriteId_json_str)

      setFavoriteCharacterID(favoriteId)
      // setFavoriteExist(true)
    }
    /**
     * Create cookie for comic
     */
    if (
      (from === 'comic' || from === 'comics' || from === 'display-comics') &
      !favoriteComicID?.includes(id)
    ) {
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
          {/* <img
            src={HeartPlus}
            alt="figure heart plus"
            onClick={handleCookie}
            className="card-favorite"
          /> */}
        </figure>
        <div className="card-description">
          <h3>{name}</h3>
          <p className="description">{description}</p>
        </div>
      </Link>
      <img
        src={favoriteExist ? HeartMinus : HeartPlus}
        alt="figure heart plus"
        onClick={handleCookie}
        className="card-favorite"
      />
    </div>
  )
}
