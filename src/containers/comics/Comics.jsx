import './Comics.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {fetchAllComics} from 'services/thierry-api'
// import {fetchAllComics} from '../../services/thierry-api'
import Card from 'components/card'

export default function Comics() {
  const [comics, setComics] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
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
        {/* {comics?.results?.map(comic => {
          return (
            <div key={comic._id}>
              <Link to={`/comic/${comic._id}`}>
                <div>{comic.title}</div>
              </Link>
            </div>
          )
        })} */}
        <div className="comics-card-container">
          {comics?.results?.map(comic => {
            return (
              //src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              <Card
                picturePath={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                name={comic.title}
                description={comic.description}
                id={comic._id}
                linkTO={`/comic/${comic._id}`}
                key={comic._id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
