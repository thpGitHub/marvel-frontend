import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <ul>
            <li><Link to={'/'}>Personnages</Link></li>
            <li><Link to={'/comics'}>Comics</Link></li>
            <li><Link to={'/favoris'}>Favoris</Link></li>
        </ul>
        </div>
  )
}
//personnages, comics, favoris
