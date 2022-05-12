import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {fetchCharacter} from 'services/thierry-api.js'
import Card from 'components/card/Card'
// import {fetchCharacter} from '../../services/thierry-api'
import DisplayComicsById from 'components/displayComicsById'

export default function Character() {
  const {id} = useParams()

  const [character, setCharacter] = useState()
  // const [comicsIds, setComicsIds] = useState([])
  // const [listComics, setListComics] = useState([])

  // const getComicsList = () => {
  //   character?.forEach(element => {
  //     fetchComic(element).then(comic => {
  //       setComicsIds([...setComicsIds, comic])
  //     })
  //   });
  // }
  useEffect(() => {
    fetchCharacter(id).then(charac => {
      console.log('character === ', charac)
      setCharacter(charac)
      // fetchComic(id).then(comic => {
      //   console.log('comic === ', comic)
      //   setListComics(comic)
      // })
    })
    // .then(() => {
    //   fetchComic(character.comics).then(comic => {
    //     console.log('comic === ', comic)
    //     setListComics(comic)
    //   })
    // })
  }, [id])

  // useEffect(() => {
  //   if(character) {

  //     console.log('character a changéééééé', character)
  //     character.comics.map((comic)=> ( 
  //       console.log('comic',comic)
  //     ))
  //   }
  //   // setComicsIds(character?.comics)
  // }, [character])

  // useEffect(() => {
    // fetchComic(comicsIds[0]).then(comic=> {
    //   console.log('comic === ', comic)
    //   setListComics(comic)
    // })
    //    const getComicsList = () => {
    //     comicsIds?.forEach(Element => {
    //       console.log('element ===', Element)
    //       fetchComic(Element).then(comic => {
    //         const newListComics = [...listComics]
    //         newListComics.push(comic)
    //         setListComics(newListComics)
    //       })
    //     })
    // }
    // getComicsList()
    // comicsIds?.forEach(Element => {
    //   console.log('element ===', Element)
    //   fetchComic(Element).then(comic => {
    //     const newListComics = [...listComics]
    //     newListComics.push(comic)
    //     setListComics(newListComics)
    //   })
    // })
  // }, [comicsIds]) //listComics

  return (
    <div>
      <Card
        picturePath={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
        name={character?.name}
        description={character?.description}
        id={character?._id}
        linkTO={''}
      />
      <div>
        {/* {comicsIds?.map(comicId => ( 
          fetchComic(comicId).then(comic => {

            // return <div key={comicId}>{comicId}</div>
            return <div key={comicId}>toto</div>
          })
        ))} */}
        <DisplayComicsById comicsIds={character?.comics}/>
      </div>
    </div>
  )
}
