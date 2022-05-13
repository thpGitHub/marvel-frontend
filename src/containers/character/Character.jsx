import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {fetchCharacter} from 'services/thierry-api.js'
import Card from 'components/card/Card'
import DisplayComicsById from 'components/displayComicsById'

export default function Character() {
  const {id} = useParams()

  const [character, setCharacter] = useState()

  useEffect(() => {
    fetchCharacter(id).then(charac => {
      console.log('character === ', charac)
      setCharacter(charac)
    })
  }, [id])

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
        {character?.comics?.length > 0 ? (
          <h2>{`Comics liés a ${character?.name}`}</h2>
        ) : (
          <h2>{`Auncun comics liés a ${character?.name}`}</h2>
        )}
        <DisplayComicsById comicsIds={character?.comics} />
      </div>
    </div>
  )
}
