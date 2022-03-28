import React from 'react'
import UseSelect from '../hooks/UseSelect'
import '../styles/Nav.scss'

function Header({title}) {
    return (
      <nav>
         <h1>{title}</h1>
      </nav>
    )
}

export default Header
