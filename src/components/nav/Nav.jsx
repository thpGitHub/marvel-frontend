import './Nav.css'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav-container'>
      <Link className='link' to={'/'}>Personnages</Link>

      <Link className='link' to={'/comics'}>Comics</Link>

      <Link className='link' to={'/favoris'}>Favoris</Link>
    </nav>
  )
}
//personnages, comics, favoris
