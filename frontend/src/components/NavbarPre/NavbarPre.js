import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarPre.css'
import Dropdown from './Dropdown'
import { FaBars } from 'react-icons/fa'
//import { Button } from '../ButtonElement'

function NavbarPre() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          InvestTechh
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i classname={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Select the stock whose prediction you want to view
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links1'
              onClick={closeMobileMenu}
            >
              Your Stock <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarPre
