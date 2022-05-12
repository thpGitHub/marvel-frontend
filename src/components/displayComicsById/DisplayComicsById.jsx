import {useState, useEffect} from 'react'
import {fetchComicsByIds} from 'services/thierry-api'

export default function DisplayComicsById({comicsIds}) {
  const [comicsList, setComicsList] = useState()

  useEffect(() => {
    console.log('comicsIds', comicsIds)
    fetchComicsByIds(comicsIds).then(toto => {
      console.log(toto)
      setComicsList(toto)
    })
  }, [comicsIds])

  return (
    <div>
      {comicsList?.map(comicList => {
        return <div keys={comicList.data._id}> {comicList.data.title}</div>
      })}
    </div>
  )
}
