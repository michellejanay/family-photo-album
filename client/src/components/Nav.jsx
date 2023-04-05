import React from 'react'

const Nav = ({ listItem, keys }) => {
  return (
    <ul>
      {listItem.map((item, i) => (
        <li key={keys[i]}>{item}</li>
      ))}
    </ul>
  )
}

export default Nav
