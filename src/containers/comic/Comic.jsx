import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {fetchComic} from '../../services/thierry-api'

export default function Comic() {
  const {id} = useParams()

  const [comic, setComic] = useState()

  useEffect(() => {
    fetchComic(id).then(comic => {
      console.log('comic === ', comic)
      setComic(comic)
    })
  }, [id])

  return <div>{comic.title}</div>
}
