import './Comics.css'
import {useState, useEffect} from 'react'
// ** Components **
import Card from 'components/card'
// ** Services **
import {fetchAllComics} from 'services/thierry-api'

export default function Comics({favoriteComicID, setFavoriteComicID}) {
  const [comics, setComics] = useState([])
  const [searchComics, setSearchComics] = useState('')

  useEffect(() => {
    fetchAllComics(searchComics).then(comics => {
      setComics(comics)
    })
  }, [searchComics])

  const handleChangeInput = e => {
    setSearchComics(e.target.value)
  }

  return (
    <div className="comics-container">
      <div className="comics-header">
        <h2>COMICS LIST</h2>
        <input
          type="search"
          value={searchComics}
          onChange={handleChangeInput}
          placeholder="SEARCH"
        />
      </div>
      <div>
        <div className="comics-card-container">
          {comics?.results?.map(comic => {
            return (
              <Card
                id={comic._id}
                key={comic._id}
                from="comics"
                name={comic.title}
                linkTO={`/comic/${comic._id}`}
                description={comic.description}
                picturePath={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                favoriteComicID={favoriteComicID}
                setFavoriteComicID={setFavoriteComicID}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
