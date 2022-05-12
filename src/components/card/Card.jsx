import {Link} from 'react-router-dom'

export default function Card({picturePath, name, description, id, linkTO}) {
  return (
    <div className="card">
      {/* {characters?.results?.map(character => { */}
      {/* return ( */}
      {/* //   thumbnail": {
          //     "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          //     "extension": "jpg"
          // }, */}

      {/* <Link to={`/character/${id}`} key={id}> */}
      <Link to={linkTO} key={id}>
        <figure>
          <img
            // src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
            src={picturePath}
            alt="figure character"
          />
        </figure>
        <div className="card-description">
          <span>{name}</span>
          <p className="description">{description}</p>
        </div>
      </Link>
      {/* // </div> */}
      {/* // )
    //   })} */}
    </div>
  )
}
