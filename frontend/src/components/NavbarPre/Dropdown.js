import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import { FaBars } from 'react-icons/fa'
import './Dropdown.css'

function Dropdown() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cname}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Dropdown
