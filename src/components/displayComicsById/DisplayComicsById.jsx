import './DisplayComicsById.css'
import {useState, useEffect} from 'react'
// ** Components **
import Card from 'components/card'
// ** Services **
import {fetchComicsByIds} from 'services/thierry-api'

export default function DisplayComicsById({
  comicsIds,
  favoriteComicID,
  setFavoriteComicID,
}) {
  const [comicsList, setComicsList] = useState()

  useEffect(() => {
    fetchComicsByIds(comicsIds).then(toto => {
      setComicsList(toto)
    })
  }, [comicsIds])

  return (
    <div className="displayComicsById-card-container">
      {comicsList?.map((comicList, index) => {
        return (
          //
          <Card
            id={comicList?.data?._id}
            key={comicList?.data?._id ?? index}
            from="display-comics"
            name={comicList?.data?.title}
            linkTO={'#'}
            description={comicList?.data?.description}
            picturePath={`${comicList?.data?.thumbnail?.path}.${comicList?.data?.thumbnail?.extension}`}
            favoriteComicID={favoriteComicID}
            setFavoriteComicID={setFavoriteComicID}
          />
        )
      })}
    </div>
  )
}
