import './Nav.css'
import {Link} from 'react-router-dom'

export default function Nav({lengthFavoris}) {
  return (
    <nav className="nav-container">
      <Link className="link" to={'/'}>
        Personnages
      </Link>

      <Link className="link" to={'/comics'}>
        Comics
      </Link>

      <div className='favoris-container'>
        <Link className="link favoris" to={'/favoris'}>
          Favoris
        </Link>
        <div className='counter-favoris'>{lengthFavoris}</div>
      </div>
    </nav>
  )
}
