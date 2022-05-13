import {Link} from 'react-router-dom'

export default function Card({picturePath, name, description, id, linkTO}) {
  return (
    <div className="card">
      <Link to={linkTO} key={id}>
        <figure>
          <img src={picturePath} alt="figure character" />
        </figure>
        <div className="card-description">
          <span>{name}</span>
          <p className="description">{description}</p>
        </div>
      </Link>
    </div>
  )
}
