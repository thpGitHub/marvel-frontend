import './Header.css'
import {Link} from 'react-router-dom'
import logo from 'assets/img/logo/logo'

export default function Header() {
  return (
    <div className="header-container">
      <Link to={'/'}>
        <img src={logo} alt="marvel-logo" />
      </Link>
    </div>
  )
}
