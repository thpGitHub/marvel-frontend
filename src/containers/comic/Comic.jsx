import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {fetchComic} from 'services/thierry-api'
import Card from 'components/card'

export default function Comic({favoriteComicID, setFavoriteComicID}) {
  const {id} = useParams()

  const [comic, setComic] = useState()

  useEffect(() => {
    fetchComic(id).then(comic => {
      setComic(comic)
    })
  }, [id])

  return (
    <div>
      <Card
        id={comic?._id}
        from="comic"
        name={comic?.name}
        linkTO={''}
        description={comic?.description}
        picturePath={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
        favoriteComicID={favoriteComicID}
        setFavoriteComicID={setFavoriteComicID}
      />
    </div>
  )
}
