import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {fetchCharacter} from 'services/thierry-api.js'
// import {fetchCharacter} from '../../services/thierry-api'

export default function Character() {
  const {id} = useParams()

  const [character, setCharacter] = useState()

  useEffect(() => {
    fetchCharacter(id).then(charac => {
      console.log('character === ', charac)
      setCharacter(charac)
    })
  }, [id])

  return <div>{character?.name}</div>
}
