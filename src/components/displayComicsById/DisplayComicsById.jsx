import './DisplayComicsById.css'
import {useState, useEffect} from 'react'
import {fetchComicsByIds} from 'services/thierry-api'
import Card from 'components/card'

export default function DisplayComicsById({comicsIds}) {
  const [comicsList, setComicsList] = useState()

  useEffect(() => {
    console.log('comicsIds', comicsIds)
    fetchComicsByIds(comicsIds).then(toto => {
      setComicsList(toto)
    })
  }, [comicsIds])

  return (
          
      <div className="displayComicsById-card-container">
        {comicsList?.map(comicList => {
          
          return (
            //
            <Card
              picturePath={`${comicList?.data?.thumbnail?.path}.${comicList?.data?.thumbnail?.extension}`}
              name={comicList?.data?.title}
              description={comicList?.data?.description}
              id={comicList?.data?._id}
              linkTO={'#'}
              key={comicList?.data?._id}
            />
          )
        })}
      </div>
    
  )
}
