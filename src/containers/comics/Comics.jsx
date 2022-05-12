import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {fetchAllComics} from '../../services/thierry-api'

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
    <div>
      <h2>COMICS LIST</h2>
      <input
        type="search"
        placeholder="SEARCH"
        value={searchComics}
        onChange={handleChangeInput}
      />
      <div>
        {comics?.results?.map(comic => {
          return (
            <div key={comic._id}>
              <Link to={`/comic/${comic._id}`}>
                <div>{comic.title}</div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
