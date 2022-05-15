import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
// ** Vendor **
import Cookies from 'js-cookie'
// ** Assets **
import HeartPlus from 'assets/img/favorites/heart-circle-plus'
import HeartMinus from 'assets/img/favorites/heart-circle-minus'

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
    const [displayFavoriteImg, setDisplayFavoriteImg] = useState('')

    useEffect(() => {
        if (
            favoriteCharacterID?.includes(id) ||
            favoriteComicID?.includes(id)
        ) {
            setDisplayFavoriteImg(HeartMinus)
        } else {
            setDisplayFavoriteImg(HeartPlus)
        }
    }, [favoriteCharacterID, favoriteComicID, id])

    const handleCookie = e => {
        /**
         * witch favorite icone is display ?
         * if "minus" delete cookie
         * if "plus" create cookie
         */
        if (e.target.src.includes('plus')) {
            /**
             * Create cookie for character
             * ListFavoritesIdsCharacters = ["id", "id", ...]
             */
            if (
                (from === 'character' || from === 'characters') &
                !favoriteCharacterID?.includes(id)
            ) {
                const favoriteId = [...favoriteCharacterID, id]
                const favoriteId_json_str = JSON.stringify(favoriteId)
                Cookies.set('ListFavoritesIdsCharacters', favoriteId_json_str, {
                    expires: 7,
                })

                setFavoriteCharacterID(favoriteId)
                // setFavoriteExist(true)
            }
            /**
             * Create cookie for comic
             */
            if (
                (from === 'comic' ||
                    from === 'comics' ||
                    from === 'display-comics') & !favoriteComicID?.includes(id)
            ) {
                const favoriteId = [...favoriteComicID, id]
                const favoriteId_json_str = JSON.stringify(favoriteId)
                Cookies.set('ListFavoritesIdsComics', favoriteId_json_str, {
                    expires: 7,
                })

                setFavoriteComicID(favoriteId)
            }
        }
        if (e.target.src.includes('minus')) {
            /**
             * Delete id cookie for character
             * ListFavoritesIdsCharacters = ["id", "id", ...]
             */
            if (
                (from === 'character' ||
                    from === 'characters' ||
                    from === 'favori-characters') &
                favoriteCharacterID?.includes(id)
            ) {
                //[...favoriteCharacterID, id]
                let newFavoriteCharacterID = [...favoriteCharacterID]
                newFavoriteCharacterID = newFavoriteCharacterID.filter(
                    item => item !== id,
                )

                const newFavoriteCharacterID_json_str = JSON.stringify(
                    newFavoriteCharacterID,
                )
                Cookies.set(
                    'ListFavoritesIdsCharacters',
                    newFavoriteCharacterID_json_str,
                    {expires: 7},
                )

                setFavoriteCharacterID(newFavoriteCharacterID)
            }
            /**
             * Delete id cookie for comic
             * ListFavoritesIdsCharacters = ["id", "id", ...]
             */
            if (
                (from === 'comic' ||
                    from === 'comics' ||
                    from === 'display-comics' ||
                    from === 'favori-comics') & favoriteComicID?.includes(id)
            ) {
                let newFavoriteComicID = [...favoriteComicID]
                newFavoriteComicID = newFavoriteComicID.filter(
                    item => item !== id,
                )

                const newFavoriteComicID_json_str =
                    JSON.stringify(newFavoriteComicID)
                Cookies.set(
                    'ListFavoritesIdsComics',
                    newFavoriteComicID_json_str,
                    {expires: 7},
                )

                setFavoriteComicID(newFavoriteComicID)
            }
        }
    }

    return (
        <div className="card">
            <div className="card-container">
                <Link to={linkTO} key={id}>
                    <figure>
                        <img src={picturePath} alt="figure character" />
                    </figure>
                    <div className="card-description">
                        <h3>{name}</h3>
                        <p className="description">{description}</p>
                    </div>
                </Link>
                <img
                    src={displayFavoriteImg}
                    alt="figure heart"
                    onClick={handleCookie}
                    className="card-favorite"
                />
            </div>
        </div>
    )
}
