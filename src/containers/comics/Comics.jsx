import './Comics.css'
import {useState, useEffect} from 'react'
import {fetchAllComics} from 'services/thierry-api'
import Card from 'components/card'

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
          placeholder="SEARCH"
          value={searchComics}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <div className="comics-card-container">
          {comics?.results?.map(comic => {
            return (
              <Card
                from="comics"
                picturePath={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                name={comic.title}
                description={comic.description}
                id={comic._id}
                linkTO={`/comic/${comic._id}`}
                key={comic._id}
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
