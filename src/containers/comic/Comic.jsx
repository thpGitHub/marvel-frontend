import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {fetchComic} from 'services/thierry-api'
import Card from 'components/card'

export default function Comic() {
  const {id} = useParams()

  const [comic, setComic] = useState()

  useEffect(() => {
    fetchComic(id).then(comic => {
      console.log('comic === ', comic)
      setComic(comic)
    })
  }, [id])

  return (
    <div>
      <Card
        picturePath={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
        name={comic?.name}
        description={comic?.description}
        id={comic?._id}
        linkTO={''}
      />
    </div>
  )
}
